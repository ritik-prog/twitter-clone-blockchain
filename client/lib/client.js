import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bme0opx0',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skBhLMDAks1otXgn7V4fZeBTTkIggcKgF7BcNd9Xlp0OBCQCdir0WckLhT9AWYK9vRDBb2z76X9PECzky8zmwrlnu2E5ihdbA2AOSPDPyiTAe0lM1RJCoKp4wwLSSva4zZo53kPTsjpQwLElaSlTiMLLGLZLhqCUnxSeoCnVRZYNorWuyv12',
  useCdn: false,
})
