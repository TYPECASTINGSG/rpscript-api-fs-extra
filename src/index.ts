/**
 * @module fs-extra
 */

import fsExtra from 'fs-extra';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("fs-extra")
export default class RPSFsExtra {

  @rpsAction({verbName:'copy'})
  async copy (ctx:RpsContext,opts:Object, src:string,dest:string) : Promise<void>{
    return fsExtra.copySync(src,dest,opts);
  }
  @rpsAction({verbName:'empty-dir'})
  async emptyDir (ctx:RpsContext,opts:Object, directory:string) : Promise<void>{
    return fsExtra.emptyDirSync(directory);
  }

  @rpsAction({verbName:'ensure-file'})
  async ensureFile (ctx:RpsContext,opts:Object, filename:string) : Promise<void>{
    return fsExtra.ensureFileSync(filename);
  }
  @rpsAction({verbName:'ensure-dir'})
  async ensureDir (ctx:RpsContext,opts:Object, dirName:string) : Promise<void>{
    return fsExtra.ensureDirSync(dirName);
  }

  @rpsAction({verbName:'ensure-link'})
  async ensureLink (ctx:RpsContext,opts:Object, sourcePath:string, destinationPath:string) : Promise<void>{
    return fsExtra.ensureLinkSync(sourcePath,destinationPath);
  }

  @rpsAction({verbName:'ensure-symlink'})
  async ensureSymlink (ctx:RpsContext,opts:Object, sourcePath:string, destinationPath:string) : Promise<void>{
    return fsExtra.ensureSymlinkSync(sourcePath,destinationPath);
  }

  @rpsAction({verbName:'move'})
  async move (ctx:RpsContext,opts:Object, sourcePath:string, destinationPath:string) : Promise<void>{
    return fsExtra.moveSync(sourcePath,destinationPath,opts);
  }

  @rpsAction({verbName:'output-file'})
  async outputFile (ctx:RpsContext,opts:Object, file:string, content:string) : Promise<void>{
    return fsExtra.outputFileSync(file,content,opts);
  }

  @rpsAction({verbName:'output-json'})
  async outputJson (ctx:RpsContext,opts:Object, file:string, object:Object) : Promise<void>{
    return fsExtra.outputJsonSync(file,object,opts);
  }

  @rpsAction({verbName:'path-exists'})
  async pathExists (ctx:RpsContext,opts:Object, file:string) : Promise<boolean>{
    return fsExtra.pathExistsSync(file);
  }

  @rpsAction({verbName:'read-json'})
  async readJson (ctx:RpsContext,opts:Object, file:string) : Promise<void>{
    return fsExtra.readJsonSync(file,opts);
  }

  @rpsAction({verbName:'remove'})
  async remove (ctx:RpsContext,opts:Object, path:string) : Promise<void>{
    return fsExtra.removeSync(path);
  }

  @rpsAction({verbName:'write-json'})
  async writeJson (ctx:RpsContext,opts:Object, file:string, object:Object) : Promise<void>{
    return fsExtra.writeJsonSync(file,object,opts);
  }

}

