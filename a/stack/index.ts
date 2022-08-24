import * as aws from '@pulumi/aws'

export const createStack = (region: aws.Region) => {
  const provider = new aws.Provider(region, { region })
  new aws.s3.Bucket('tpwbucket', { acl: 'private'}, { provider })
  new aws.lambda.CallbackFunction('myfunc', {
    callback: async () => 'hello'
  })
}
