######### text to image + image to image #########

# import traceback
# import torch
# import base64
# from io import BytesIO
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from PIL import Image

# # Import the necessary components from diffusers
# from diffusers import StableDiffusionPipeline, StableDiffusionImg2ImgPipeline, LCMScheduler, AutoencoderKL

# # -------------------------------
# # Flask Setup
# # -------------------------------
# app = Flask(__name__)
# CORS(app)  # allow cross-origin requests

# # -------------------------------
# # Configuration and Model Loading
# # -------------------------------
# print("⏳ Loading Stable Diffusion models...")

# # Define model IDs and LoRA ID
# BASE_MODEL_ID = "dreamlike-art/dreamlike-photoreal-2.0"
# LCM_LORA_ID = "latent-consistency/lcm-lora-sdv1-5"
# VAE_ID = "stabilityai/sd-vae-ft-mse"

# device = "cuda" if torch.cuda.is_available() else "cpu"



# try:
#     # Load base text2image and image2image pipelines from the same model ID
#     # The library will handle caching and reuse of files automatically
#     txt2img_pipe = StableDiffusionPipeline.from_pretrained(
#         BASE_MODEL_ID,
#         torch_dtype=torch.float16 if device == "cuda" else torch.float32,
#     )
#     print("loaded txt2img pipeline successfully !!")
#     img2img_pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
#         BASE_MODEL_ID,
#         torch_dtype=torch.float16 if device == "cuda" else torch.float32,
#     )
#     print("loaded img2img pipline successfully !!")

#     # Load and set the VAE for both pipelines for enhanced detail
#     vae = AutoencoderKL.from_pretrained(VAE_ID, torch_dtype=torch.float16 if device == "cuda" else torch.float32)
#     txt2img_pipe.vae = vae
#     img2img_pipe.vae = vae

#     # Move pipelines to the selected device
#     txt2img_pipe.to(device)
#     img2img_pipe.to(device)

#     # Load and fuse the LCM-LoRA weights into both pipelines
#     txt2img_pipe.load_lora_weights(LCM_LORA_ID)
#     img2img_pipe.load_lora_weights(LCM_LORA_ID)
#     print("loaded LoRA into pipeline successfully !! ")
#     # Set the LCM-Scheduler for fast inference
#     txt2img_pipe.scheduler = LCMScheduler.from_config(txt2img_pipe.scheduler.config)
#     img2img_pipe.scheduler = LCMScheduler.from_config(img2img_pipe.scheduler.config)


#     # Apply performance optimizations (xformers)
#     if device == "cuda":
#         # Check for xformers availability and enable if present
#         try:
#             txt2img_pipe.enable_xformers_memory_efficient_attention()
#             img2img_pipe.enable_xformers_memory_efficient_attention()
#         except ImportError:
#             print("xformers not installed. Using attention slicing instead.")
#             txt2img_pipe.enable_attention_slicing()
#             img2img_pipe.enable_attention_slicing()

#     print("✅ Models loaded successfully!")

# except Exception as e:
#     print(f"FATAL: Error loading models. The server cannot start. {e}")
#     traceback.print_exc()
#     # txt2img_pipe, img2img_pipe = None, None
#     print("MISSION ABBORT !!!! ")


# # -------------------------------
# # API Endpoint
# # -------------------------------
# @app.route("/generate-image", methods=["POST"])
# def generate_image():
#     try:
#         data = request.get_json(force=True, silent=True)
#         if not data or "prompt" not in data:
#             return jsonify({"error": "Prompt is required"}), 400
        
#         # # Load the LCM LoRA
#         # LCM_LORA_ID = "latent-consistency/lcm-lora-sdv1-5"

#         # # Load the LCM-LoRA weights into both pipelines
#         # txt2img_pipe.load_lora_weights(LCM_LORA_ID)
#         # img2img_pipe.load_lora_weights(LCM_LORA_ID)

#         # # Set the LCM-Scheduler for fast inference
#         # txt2img_pipe.scheduler = LCMScheduler.from_config(txt2img_pipe.scheduler.config)
#         # img2img_pipe.scheduler = LCMScheduler.from_config(img2img_pipe.scheduler.config)

#         # Define prompts
#         prompt = data["prompt"]
#         default_enhancements = "masterpiece, best quality, ultra-detailed, 8k, cinematic lighting, dramatic angle, "
#         prompt = f"{default_enhancements} {prompt}"
#         negative_prompt = "missing elements from the prompt:1.5, deformed faces:1.4, extra body parts:1.4, missing body parts:1.4, ugly faces:1.3, unsymmetric faces:1.3, deformed:1.3, text, error, cropped:1.5, worst quality:1.3, low quality:1.3, normal quality:1.1, jpeg artifacts, signature, watermark, username, blurry:1.2, artist name, logo, abstract, bad anatomy:1.4, bad hands:1.3, disfigured:1.4, poorly drawn face, mutated:1.3, extra limbs, missing limbs, extra fingers, fewer fingers, extra eyes:1.3, unsymmetric eyes:1.3, bad-hands:1.4"
#         # Step 1: Text-to-Image Generation
#         print("➡️ Generating initial image with text-to-image pipeline...")
#         # Use LCM optimized parameters for this step
#         initial_image = txt2img_pipe(
#             prompt=prompt,
#             negative_prompt=negative_prompt,
#             num_inference_steps=5, # Optimal for LCM
#             guidance_scale=1.1,   # Optimal for LCM
#             height=512,
#             width=512
#         ).images[0]
        
#         # Step 2: Image-to-Image Refinement
#         print("➡️ Refining image with image-to-image pipeline...")
#         # Use LCM optimized parameters again for refinement
#         final_image = img2img_pipe(
#             prompt=prompt,
#             negative_prompt=negative_prompt,
#             image=initial_image,
#             strength=0.7, # Controls how much the output deviates from the input
#             num_inference_steps=4,
#             guidance_scale=1.1
#         ).images[0]

#         # txt2img_pipe.unload_lora_weights()
#         # img2img_pipe.unload_lora_weights()


#         # Convert the final image to Base64
#         buffered = BytesIO()
#         final_image.save(buffered, format="PNG")
#         img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

#         return jsonify({"image": img_str}), 200

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": str(e)}), 500


# if __name__ == "__main__":
#     app.run(host="127.0.0.1", port=5000)












########## text to image only #############

'''
import traceback
import torch
import base64
from io import BytesIO
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image

# Import the necessary components from diffusers
from diffusers import StableDiffusionPipeline, StableDiffusionImg2ImgPipeline, LCMScheduler, AutoencoderKL

# -------------------------------
# Flask Setup
# -------------------------------
app = Flask(__name__)
CORS(app)  # allow cross-origin requests

# -------------------------------
# Configuration and Model Loading
# -------------------------------
print("⏳ Loading Stable Diffusion models...")

# Define model IDs and LoRA ID
BASE_MODEL_ID = "dreamlike-art/dreamlike-photoreal-2.0"
LCM_LORA_ID = "latent-consistency/lcm-lora-sdv1-5"
VAE_ID = "stabilityai/sd-vae-ft-mse"

device = "cuda" if torch.cuda.is_available() else "cpu"



try:
    # Load base text2image and image2image pipelines from the same model ID
    # The library will handle caching and reuse of files automatically
    txt2img_pipe = StableDiffusionPipeline.from_pretrained(
        BASE_MODEL_ID,
        torch_dtype=torch.float16 if device == "cuda" else torch.float32,
    )
    print("loaded txt2img pipeline successfully !!")
    # img2img_pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    #     BASE_MODEL_ID,
    #     torch_dtype=torch.float16 if device == "cuda" else torch.float32,
    # )
    # print("loaded img2img pipline successfully !!")

    # Load and set the VAE for both pipelines for enhanced detail
    vae = AutoencoderKL.from_pretrained(VAE_ID, torch_dtype=torch.float16 if device == "cuda" else torch.float32)
    txt2img_pipe.vae = vae
    # img2img_pipe.vae = vae

    # Move pipelines to the selected device
    txt2img_pipe.to(device)
    # img2img_pipe.to(device)

    # Load and fuse the LCM-LoRA weights into both pipelines
    txt2img_pipe.load_lora_weights(LCM_LORA_ID)
    # img2img_pipe.load_lora_weights(LCM_LORA_ID)
    print("loaded LoRA into pipeline successfully !! ")
    # Set the LCM-Scheduler for fast inference
    txt2img_pipe.scheduler = LCMScheduler.from_config(txt2img_pipe.scheduler.config)
    # img2img_pipe.scheduler = LCMScheduler.from_config(img2img_pipe.scheduler.config)


    # Apply performance optimizations (xformers)
    if device == "cuda":
        # Check for xformers availability and enable if present
        try:
            txt2img_pipe.enable_xformers_memory_efficient_attention()
            # img2img_pipe.enable_xformers_memory_efficient_attention()
        except ImportError:
            print("xformers not installed. Using attention slicing instead.")
            txt2img_pipe.enable_attention_slicing()
            # img2img_pipe.enable_attention_slicing()

    print("✅ Models loaded successfully!")

except Exception as e:
    print(f"FATAL: Error loading models. The server cannot start. {e}")
    traceback.print_exc()
    # txt2img_pipe, img2img_pipe = None, None
    print("MISSION ABBORT !!!! ")


# -------------------------------
# API Endpoint
# -------------------------------
@app.route("/generate-image", methods=["POST"])
def generate_image():
    try:
        data = request.get_json(force=True, silent=True)
        if not data or "prompt" not in data:
            return jsonify({"error": "Prompt is required"}), 400
        
        # # Load the LCM LoRA
        # LCM_LORA_ID = "latent-consistency/lcm-lora-sdv1-5"

        # # Load the LCM-LoRA weights into both pipelines
        # txt2img_pipe.load_lora_weights(LCM_LORA_ID)
        # img2img_pipe.load_lora_weights(LCM_LORA_ID)

        # # Set the LCM-Scheduler for fast inference
        # txt2img_pipe.scheduler = LCMScheduler.from_config(txt2img_pipe.scheduler.config)
        # img2img_pipe.scheduler = LCMScheduler.from_config(img2img_pipe.scheduler.config)

        # Define prompts
        prompt = data["prompt"]
        default_enhancements = "masterpiece, best quality, ultra-detailed, 8k, cinematic lighting, dramatic angle, "
        prompt = f"{default_enhancements} {prompt}"
        negative_prompt = "missing elements from the prompt:1.5, deformed faces:1.4, extra body parts:1.4, missing body parts:1.4, ugly faces:1.3, unsymmetric faces:1.3, deformed:1.3, text, error, cropped:1.5, worst quality:1.3, low quality:1.3, normal quality:1.1, jpeg artifacts, signature, watermark, username, blurry:1.2, artist name, logo, abstract, bad anatomy:1.4, bad hands:1.3, disfigured:1.4, poorly drawn face, mutated:1.3, extra limbs, missing limbs, extra fingers, fewer fingers, extra eyes:1.3, unsymmetric eyes:1.3, bad-hands:1.4"
        # Step 1: Text-to-Image Generation
        print("➡️ Generating initial image with text-to-image pipeline...")
        # Use LCM optimized parameters for this step
        initial_image = txt2img_pipe(
            prompt=prompt,
            negative_prompt=negative_prompt,
            num_inference_steps=5, # Optimal for LCM
            guidance_scale=1.1,   # Optimal for LCM
            height=512,
            width=512
        ).images[0]
        
        # Step 2: Image-to-Image Refinement
        # print("➡️ Refining image with image-to-image pipeline...")
        # Use LCM optimized parameters again for refinement
        # final_image = img2img_pipe(
        #     prompt=prompt,
        #     negative_prompt=negative_prompt,
        #     image=initial_image,
        #     strength=0.7, # Controls how much the output deviates from the input
        #     num_inference_steps=4,
        #     guidance_scale=1.1
        # ).images[0]

        # txt2img_pipe.unload_lora_weights()
        # img2img_pipe.unload_lora_weights()


        # Convert the final image to Base64
        buffered = BytesIO()
        initial_image.save(buffered, format="PNG")
        # final_image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        return jsonify({"image": img_str}), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
'''














import traceback
import torch
import base64
from io import BytesIO
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image

# Import the necessary components from diffusers
from diffusers import StableDiffusionPipeline, LCMScheduler, AutoencoderKL  #, DPMSolverMultistepScheduler ,  StableDiffusionImg2ImgPipeline,

# -------------------------------
# Flask Setup
# -------------------------------
app = Flask(__name__)
CORS(app)  # allow cross-origin requests

# -------------------------------
# Configuration and Model Loading
# -------------------------------
print("⏳ Loading Stable Diffusion models...")

# Define model IDs and LoRA ID
BASE_MODEL_ID = "dreamlike-art/dreamlike-photoreal-2.0"
LCM_LORA_ID = "latent-consistency/lcm-lora-sdv1-5"
VAE_ID = "stabilityai/sd-vae-ft-mse"

device = "cuda" if torch.cuda.is_available() else "cpu"



try:
    # Load base text2image and image2image pipelines from the same model ID
    # The library will handle caching and reuse of files automatically
    txt2img_pipe = StableDiffusionPipeline.from_pretrained(
        BASE_MODEL_ID,
        torch_dtype=torch.float16 if device == "cuda" else torch.float32,
    )
    print("loaded txt2img pipeline successfully !!")

    # Load and set the VAE for both pipelines for enhanced detail
    vae = AutoencoderKL.from_pretrained(VAE_ID, torch_dtype=torch.float16 if device == "cuda" else torch.float32)
    txt2img_pipe.vae = vae

    txt2img_pipe.to(device)


    # # Load and fuse the LCM-LoRA weights into both pipelines
    txt2img_pipe.load_lora_weights(LCM_LORA_ID)
    txt2img_pipe.fuse_lora()
    print("loaded LoRA into pipeline successfully !! ")
    # # Set the LCM-Scheduler for fast inference
    txt2img_pipe.scheduler = LCMScheduler.from_config(txt2img_pipe.scheduler.config)
    # txt2img_pipe.scheduler = DPMSolverMultistepScheduler.from_config(txt2img_pipe.scheduler.config)

    # Apply performance optimizations (xformers)
    if device == "cuda":
        # Check for xformers availability and enable if present
        try:
            txt2img_pipe.enable_xformers_memory_efficient_attention()
            
        except ImportError:
            print("xformers not installed. Using attention slicing instead.")
            txt2img_pipe.enable_attention_slicing()
         

    print("✅ Models loaded successfully!")

except Exception as e:
    print(f"FATAL: Error loading models. The server cannot start. {e}")
    traceback.print_exc()

    print("MISSION ABBORT !!!! ")

# -------------------------------
# API Endpoint
# -------------------------------
@app.route("/generate-image", methods=["POST"])
def generate_image():
    try:
        data = request.get_json(force=True, silent=True)
        if not data or "prompt" not in data:
            return jsonify({"error": "Prompt is required"}), 400
        

        # Define prompts
        prompt = data["prompt"]
        default_enhancements = "masterpiece, best quality, ultra-detailed, 8k, cinematic lighting, dramatic angle, "
        prompt = f"{default_enhancements} {prompt}"
        negative_prompt = "missing elements from the prompt:1.5, deformed faces:1.4, extra body parts:1.4, missing body parts:1.4, ugly faces:1.3, unsymmetric faces:1.3, deformed:1.3, text, error, cropped:1.5, worst quality:1.3, low quality:1.3, normal quality:1.1, jpeg artifacts, signature, watermark, username, blurry:1.2, artist name, logo, abstract, bad anatomy:1.4, bad hands:1.3, disfigured:1.4, poorly drawn face, mutated:1.3, extra limbs, missing limbs, extra fingers, fewer fingers, extra eyes:1.3, unsymmetric eyes:1.3, bad-hands:1.4"
        # Step 1: Text-to-Image Generation
        print("➡️ Generating initial image with text-to-image pipeline...")


        #  # Load and fuse the LCM-LoRA weights into both pipelines
        # txt2img_pipe.load_lora_weights(LCM_LORA_ID)

        # print("loaded LoRA into pipeline successfully !! ")
        # # Set the LCM-Scheduler for fast inference
        # txt2img_pipe.scheduler = LCMScheduler.from_config(txt2img_pipe.scheduler.config)


        
        # Use LCM optimized parameters for this step
        initial_image = txt2img_pipe(
            prompt=prompt,
            negative_prompt=negative_prompt,
            num_inference_steps=6, # Optimal for LCM
            guidance_scale=1.1,   # Optimal for LCM
            height=512,
            width=512
        ).images[0]



        # NOT Use LCM optimized parameters for this step
        # initial_image = txt2img_pipe(
        #     prompt=prompt,
        #     negative_prompt=negative_prompt,
        #     num_inference_steps=50, 
        #     guidance_scale=7,  
        #     height=512,
        #     width=512
        # ).images[0]


        # txt2img_pipe.unload_lora_weights()

        # Convert the final image to Base64
        buffered = BytesIO()
        initial_image.save(buffered, format="PNG")
      
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        return jsonify({"image": img_str}), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)