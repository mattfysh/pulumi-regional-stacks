import * as aws from '@pulumi/aws'

export class Builder {
  private nameSuffix: string
  private provider: aws.Provider

  constructor(private region: aws.Region) {
    this.nameSuffix = region
    this.provider = new aws.Provider(region, { region })
  }

  createResource<T>(Resource: any, name: string, args: any) {
    let regionalName = `${name}_${this.nameSuffix}`
    if (Resource === aws.s3.Bucket) {
      regionalName = `${name}--${this.nameSuffix}`
    }
    const opts = { provider: this.provider }
    return new Resource(regionalName, args, opts)
  }
}
