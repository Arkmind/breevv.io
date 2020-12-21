# Image Resizer 
Scriptor Image Resizer is a micro service done for Scriptor Group in order to handle cacheless image modification.

- [Installation](#installation)
	- [Production](#installation-production)
	- [Development](#installation-development)
- [Usage](#usage)
	- [Function definition](#usage-function-definition)
		- [Resizing images](#usage-function-definition-resizing-images)
		- [Image operations](#usage-function-definition-image-operations)
		- [Colour manipulation](#usage-function-definition-colour-manipulation)
		- [Channel manipulation](#usage-function-definition-channel-manipulation)
- [Documentation](#documentation)
- [Credits](#credits)


## <a name="installation"></a> Installation

### <a name="installation-production"></a> Production

`$ git clone git@github.com:Scriptor-Group/image-resizer.git` \
`$ docker image build -t scriptor-resizer:latest .` or `$ ./build.sh`

### <a name="installation-development"></a> Development
`$ git clone git@github.com:Scriptor-Group/image-resizer.git` \
`$ yarn` \
`$ yarn run dev`

**Test** \
`$ yarn test`

**Build (*output is `/dist`*)** \
`$ yarn build`


## <a name="usage"></a> Usage

`https://r.clavus.io/{base64URL}?{function}={value}`

**base64URL** \
Encoded base64 image URL

**function** \
Name of the function (must be part of the [functions definition](#usage-function-definition))

**value** \
Accept the type defined by the [function definition](#usage-function-definition) you're using. \
To handle `Object` the syntax is the following one `{key}:{value},{key}:[{value}]` \
***e.g :*** `?resize=width:500,height:400,fit:contain`


### <a name="usage-function-definition"></a> Function definition

#### <a name="usage-function-definition-resizing-images"></a> Resizing images

| Function    | Value | Description                                     |
| ----------- | ----- | ----------------------------------------------- |
| extend | [extend](https://sharp.pixelplumbing.com/api-resize#extend) | Extends/pads the edges of the image with the provided background colour. This operation will always occur after resizing and extraction, if any. |
| extract | [Region](hhttps://sharp.pixelplumbing.com/api-resize#extract) | Extract/crop a region of the image. |
| resize | [Object](https://sharp.pixelplumbing.com/api-resize#resize) | Resize image to `width`, `height` or `width x height`. |
| trim | [number \| null](https://sharp.pixelplumbing.com/api-resize#trim) | Trim "boring" pixels from all edges that contain values similar to the top-left pixel. Images consisting entirely of a single colour will calculate "boring" using the alpha channel, if any. |


#### <a name="usage-function-definition-image-operations"></a> Image operations

| Function    | Value | Description                                     |
| ----------- | ----- | ----------------------------------------------- |
| blur | [number](https://sharp.pixelplumbing.com/api-operation#blur) | Blur the image. When used without parameters, performs a fast, mild blur of the output image. When a `sigma` is provided, performs a slower, more accurate Gaussian blur. |
| convolve | [kernel](https://sharp.pixelplumbing.com/api-operation#convolve) | Convolve the image with the specified kernel. |
| flatten | [Object](https://sharp.pixelplumbing.com/api-operation#flatten) | Merge alpha transparency channel, if any, with a background. |
| flip | [Boolean](https://sharp.pixelplumbing.com/api-operation#flip) | Flip the image about the vertical Y axis. This always occurs after rotation, if any. The use of `flip` implies the removal of the EXIF `Orientation` tag, if any. |
| flop | [Boolean](https://sharp.pixelplumbing.com/api-operation#flop) | Flop the image about the horizontal X axis. This always occurs after rotation, if any. The use of `flop` implies the removal of the EXIF `Orientation` tag, if any. |
| gamma | [number](https://sharp.pixelplumbing.com/api-operation#gamma) | Apply a gamma correction by reducing the encoding (darken) pre-resize at a factor of `1/gamma` then increasing the encoding (brighten) post-resize at a factor of `gamma`. This can improve the perceived brightness of a resized image in non-linear colour spaces. JPEG and WebP input images will not take advantage of the shrink-on-load performance optimisation when applying a gamma correction. |
| linear | [number](https://sharp.pixelplumbing.com/api-operation#linear) | Apply the linear formula a * input + b to the image (levels adjustment) |
| median | [number](https://sharp.pixelplumbing.com/api-operation#median) | Apply median filter. |
| modulate | [Object](https://sharp.pixelplumbing.com/api-operation#modulate) | Transforms the image using brightness, saturation and hue rotation. |
| negate | [Boolean](https://sharp.pixelplumbing.com/api-operation#negate) | Produce the "negative" of the image. |
| normalize | [Boolean](https://sharp.pixelplumbing.com/api-operation#normalize) | Enhance output image contrast by stretching its luminance to cover the full dynamic range. |
| rotate | [number](https://sharp.pixelplumbing.com/api-operation#rotate) | Rotate the output image by either an explicit angle or auto-orient based on the EXIF `Orientation` tag. |
| sharpen | [number](https://sharp.pixelplumbing.com/api-operation#sharpen) | Sharpen the image. |
| threshold | [number](https://sharp.pixelplumbing.com/api-operation#threshold) | Any pixel value greather than or equal to the threshold value will be set to 255, otherwise it will be set to 0. |


#### <a name="usage-function-definition-colour-manipulation"></a> Colour manipulation

| Function    | Value | Description                                     |
| ----------- | ----- | ----------------------------------------------- |
| greyscale | [Boolean](https://sharp.pixelplumbing.com/api-colour#greyscale) | Convert to 8-bit greyscale; 256 shades of grey. This is a linear operation. If the input image is in a non-linear colour space such as sRGB, use `gamma()` with `greyscale()` for the best results. By default the output image will be web-friendly sRGB and contain three (identical) color channels. This may be overridden by other sharp operations such as `toColourspace('b-w')`, which will produce an output image containing one color channel. |
| tint | [rgb](https://sharp.pixelplumbing.com/api-colour#tint) | Tint the image using the provided chroma while preserving the image luminance. An alpha channel may be present and will be unchanged by the operation. |
| toColorSpace | [string](https://sharp.pixelplumbing.com/api-colour#tocolourspace) | Set the output colourspace. By default output image will be web-friendly sRGB, with additional channels interpreted as alpha channels. |


#### <a name="usage-function-definition-channel-manipulation"></a> Channel manipulation

| Function    | Value | Description                                     |
| ----------- | ----- | ----------------------------------------------- |
| bandbool | [string](https://sharp.pixelplumbing.com/api-channel#bandbool) | Perform a bitwise boolean operation on all input image channels (bands) to produce a single channel output image. |
| ensureAlpha | null | Ensure alpha channel, if missing. The added alpha channel will be fully opaque. This is a no-op if the image already has an alpha channel. |
| extractChannel | [channel](https://sharp.pixelplumbing.com/api-channel#extractchannel)| Extract a single channel from a multi-channel image. |
| removeAlpha | null | Remove alpha channel, if any. This is a no-op if the image does not have an alpha channel. |


## <a name="documentation"></a> Documentation

> TODO

## Dependencies

> libvips compiled with support for libimagequant \
[sources](https://sharp.pixelplumbing.com/api-output#parameters-6)


## <a name="credits"></a> Credits

[express](https://expressjs.com/) \
[cors](https://github.com/expressjs/cors#readme) \
[dotenv](https://github.com/motdotla/dotenv#readme) \
[node-fetch](https://github.com/node-fetch/node-fetch#readme) \
[sharp](https://sharp.pixelplumbing.com/)

[eslint](https://eslint.org/) \
[jest](https://jestjs.io/) \
[nodemon](https://nodemon.io/) \
[typescript](https://www.typescriptlang.org/)

___

> *Copyright © Scriptor Group 2020*
