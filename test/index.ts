import {expect} from 'chai';
import m from 'mocha';

import RPSFsExtra from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('fs-extra', () => {

  m.it('should create empty directory', async function () {
    let md = new RPSFsExtra;

    let output = await md.emptyDir(new RpsContext,{},"./testEmpty");

    let exists = await md.pathExists(new RpsContext,{},'./testEmpty');
    expect(exists).to.be.true;

  }).timeout(0);

})
