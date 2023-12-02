import { promisify } from 'util';
import fs, { ReadStream } from 'fs';
import { Request } from 'express';
// import logger from '../../extensions/logger';

class LocalContentManagementService {
  static getMediaContent(filePath: string): ReadStream {
    const contentStream = fs.createReadStream(filePath, { autoClose: true });
    return contentStream;
  }

  /**
 *@description: generate url for local stored media contents
 * @param req :Request
 * @returns :mediaUrl
 */
  static generateMediaUrl(req: Request): string {
    const media = req.file!;
    const url = `${req.protocol}://${req.get('host')}`;
    const mediaUrl = `${url}/uploads/${media.filename}`;
    return mediaUrl;
  }

  
}

export default LocalContentManagementService;
