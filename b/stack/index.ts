import * as aws from '@pulumi/aws'
import { Builder } from '../builder'

export const createStack = (region: aws.Region) => {
  const builder = new Builder(region)
  builder.createResource(aws.s3.Bucket, 'tpwbucket2', { acl: 'private' })
  builder.createResource(aws.lambda.CallbackFunction, 'myfunc', {
    callback: async () => 'hello',
  })
}
