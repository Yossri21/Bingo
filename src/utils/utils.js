import { array } from "./data";

export const getGetRisk = (tab) => {

    let parent =  [0,1,2,3,4].sort(() => 0.5 - Math.random())[0]
    let child =  [0,1,3,4].sort(() => 0.5 - Math.random())[0]

    let getRisk =  tab[parent].items
   let updateItem = { ...getRisk[child], status: !getRisk[child].status };
   let IndexupdateItem = getRisk.findIndex(x => {
     return x.id === updateItem.id;
   });

   let Newdata = tab[parent].items.filter(x => {
     return x.id !== updateItem.id;
   });

   Newdata.splice(IndexupdateItem, 0, updateItem);

   let NewColone = { id: parent ,  items: Newdata };

   let IndexupdatemColon = tab.findIndex(x => {
     return x.id === NewColone.id;
   });

   let finalData = tab.filter(x => {
     return x.id !== parent;
   });

   finalData.splice(IndexupdatemColon, 0, NewColone);
   return [...finalData]
     
  };


  // getItemsinTable 
  export const getItemsinTable = (data, start, end) => {
    let items = [];
    for (let i = start; i < end; i++) {
      if (i === 12) {
        items.push({ name: data[i], id: i, status: true });
      } else {
        items.push({ name: data[i], id: i, status: false });
      }
    }
    return items;
  };

  export const createData = data => {
    let table = [];

    for (let i = 0; i < 5; i++) {
      table.push({ id: i, items: getItemsinTable(data, i * 5, i * 5 + 5) });
    }
    return table;
  };

  // get Horizontal

  export const getHorizontal = data => {
    let final = [];
    for (let i = 0; i < data.length; i++) {
      final.push(
        data[i].items.filter(x => {
          return x.status === true;
        }).length
      );
    }
    return final.filter(x => {
      return x === 5;
    }).length;
  };

  // get Diagonal 

  export const getDiagonal = (final , keysofDiagonal ) => {
 
    let res = [];   
    for(let i = 0 ; i< keysofDiagonal.length ; i++){ 
      res.push(final[keysofDiagonal[i]])
    }
  
   return  res.filter(x => {
      return x.status === true;
    }).length === 5 ? 1 : 0  ;
  
  };

  // get All data

  export const getAllDataInArray = data => {
    let final = [];
    data.forEach(element => {
      final.push(...element.items);
    });
    return final;
  };

  // get vertical

  export const VerticalResult = data => {
    let vertical = [];
  
    const getVertical = (data, i) => {
      return data
        .map(item => {
          return item.items[i];
        })
        .filter(x => {
          return x.status === true;
        }).length;
    };
  
    for (let i = 0; i < 5; i++) {
      vertical.push(getVertical(data, i));
    }
  
    return vertical.filter(x => {
      return x === 5;
    }).length;
  };

  export const checkResult = (data) => {
    let resVertical = VerticalResult(data)
    let resHorisontal = getHorizontal(data)
    let resFirstDigonal = getDiagonal (getAllDataInArray(data) , [0,6,12,18,24] )
    let resSecondDigonal = getDiagonal (getAllDataInArray(data) , [4,8,12,16,20] )
  let res =  resVertical + resHorisontal + resFirstDigonal +resSecondDigonal
  return res
   }

   export const getRandomData = ()=>{
       return createData(array.sort(() => Math.random() - 0.5))
   }

   export const clickTable = (item , data , fullData)=>{
    let updateItem = { ...item, status: true };

                let IndexupdateItem = data.items.findIndex(x => {
                  return x.id === updateItem.id;
                });

                let Newdata = data.items.filter(x => {
                  return x.id !== item.id;
                });

                Newdata.splice(IndexupdateItem, 0, updateItem);

                let NewColone = { id: data.id ,  items: Newdata };

                let IndexupdatemColon = fullData.findIndex(x => {
                  return x.id === NewColone.id;
                });

                let finalData = fullData.filter(x => {
                  return x.id !== data.id;
                });

                finalData.splice(IndexupdatemColon, 0, NewColone);
                return [...finalData]
   }