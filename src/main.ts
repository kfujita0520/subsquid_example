import {TypeormDatabase} from '@subsquid/typeorm-store'
import * as erc721 from './abi/erc721';
import * as erc1155 from './abi/erc1155';
import * as modules from './mappings';
import * as utils from './mappings/utils';
import {processor} from './processor'



//this comes from asterIndexer repository
processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    utils.entity.initAllEntityManagers(ctx);
    await utils.entity.prefetchEntities(ctx);
  
  
    let data_cnt = 1;
    for (const block of ctx.blocks) {

      for (let log of block.logs) {
        if (log.topics[0] == erc721.events.Transfer.topic) {
          console.log(log.topics)
          if (log.topics.length == 4) {
            // EIP-721
            utils.common.blockContextManager.init(block.header, log);
            try {
              //console.log(block.header.height, log.logIndex);
              await modules.handleErc721Transfer();
            } catch (error) {
              console.log(error);
            }
            data_cnt += 1;
          } else {
            // EIP-20
            continue;
          }
        }

        //定期的にsave
        console.log('save data');
        if (data_cnt % 10 == 0) {
          console.log('saveAllEntities');
          await utils.entity.saveAllEntities();
        }
  
        utils.common.blockContextManager.resetBlockContext();
      }
    }
  
    await utils.entity.saveAllEntities();
  });


//This comes from evm-processor template. 
// This is example of couting the burned amount of native token thus transaction data should be enough rather than event information of Log
// processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {

//     for (let c of ctx.blocks) {
//         for (let tx of c.transactions) {
//             // decode and normalize the tx data
           
//         }
//     }
//     // apply vectorized transformations and aggregations
//     const startBlock = ctx.blocks.at(0)?.header.height
//     const endBlock = ctx.blocks.at(-1)?.header.height

//     // upsert batches of entities with batch-optimized ctx.store.save
//     //await ctx.store.upsert(burns)
// })

//This comes from aster_rpc_token repository in Subsquid organiazaiion
//since processor type is different, this may not work.
// processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
//     utils.entity.initAllEntityManagers(ctx);
//     await utils.entity.prefetchEntities(ctx);
  
//     for (const block of ctx.blocks) {
//       for (const item of block.items) {
//         if (item.name === 'EVM.Log') {
//           utils.common.blockContextManager.init(block.header, item.event);
//           switch ((item.event.args.log || item.event.args).topics[0]) {
//             case erc721.events.Transfer.topic:
//               try {
//                 await modules.handleErc721Transfer();
//               } catch (error) {
//                   // console.log(error);
//               }
//               break;
//             default:
//           }
//           utils.common.blockContextManager.resetBlockContext();
//         }
//       }
//     }
  
//     await utils.entity.saveAllEntities();
//   });