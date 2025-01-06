import AWS from 'aws-sdk';
const S3 = new AWS.S3();

export const handler = async (event) => {
  const bucketName = process.env.BUCKET_NAME;
    const fileName = event.queryStringParameters.fileName;
    const fileType = event.queryStringParameters.fileType;
    const region = 'us-east-1';
    const expiration = 60 * 5; // 5 minutes

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Expires: expiration,
        ContentType: fileType,
        ACL: 'public-read'
    };

    try {
        const presignedUrl = await S3.getSignedUrlPromise('putObject', params);
        const fileUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;

        return {
            statusCode: 200,
            body: JSON.stringify({ presignedUrl, fileUrl }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error generating pre-signed URL' }),
        };
    }
};
