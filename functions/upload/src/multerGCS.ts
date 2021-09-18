/*
MIT license applies to this file _only_

# Released under MIT License

Copyright (c) 2017 ARozar.

Copyright (c) 2020 Alexandre Steinberg.

Copyright (c) 2021 Steven Waterman.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import multer from "multer";
import { Bucket, Storage, StorageOptions } from '@google-cloud/storage';
import { Request } from 'express';

type GoogleCloudBlobFileReference = {
	destination?: string, 
	filename: string
}

export type MulterGoogleCloudStorageOptions = {
  bucket: string;
  destination: string;
  filename: (req: Request) => string;
};

class MulterGoogleCloudStorage implements multer.StorageEngine {
	private bucket: Bucket;
	private storage: Storage;
	private options: StorageOptions & MulterGoogleCloudStorageOptions;

	private getBlobFileReference( req: Request ): GoogleCloudBlobFileReference {
		return {
			destination: this.options.destination,
			filename: this.options.filename(req),
    };
	}

	constructor(opts: StorageOptions & MulterGoogleCloudStorageOptions) {
		this.storage = new Storage();
		this.bucket = this.storage.bucket(opts.bucket);
		this.options = opts;
	}

	_handleFile = (req: Request, file: any, cb: (err: any | null, result?: any) => void) => {
		const blobFile = this.getBlobFileReference(req);
    const blobPath = blobFile.destination + blobFile.filename;
    const blob = this.bucket.file(blobPath);
    const blobStream = blob.createWriteStream();
    file.stream.pipe(blobStream)
      .on('error', (err: any) => cb(err))
      .on('finish', () => {
        const name = blob.metadata.name;
        const filename = name.substr(name.lastIndexOf('/')+1);
        cb(null, {
          bucket: blob.metadata.bucket,
          destination: blobFile.destination,
          filename,
          path: `${blobFile.destination}${filename}`,
          contentType: blob.metadata.contentType,
          size: blob.metadata.size,
          uri: `gs://${blob.metadata.bucket}/${blobFile.destination}${filename}`,
          linkUrl: `https://storage.googleapis.com/${blob.metadata.bucket}/${blobFile.destination}${filename}`,
          selfLink: blob.metadata.selfLink,
          //metadata: blob.metadata
        })
      });
	}
	_removeFile =  (req: Request, file: any, cb: (err: any | null, result?: any) => void) => {
		const blobFile = this.getBlobFileReference(req);
    const blobName = blobFile.destination + blobFile.filename;
    const blob = this.bucket.file(blobName);
    blob.delete();
	};
}

export function storageEngine(opts: StorageOptions & MulterGoogleCloudStorageOptions) {
	return new MulterGoogleCloudStorage(opts);
}
