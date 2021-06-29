import { array } from "./data";

export const getRandomData = ()=>{
  return createData(array.sort(() => Math.random() - 0.5))
}

export const createData = data => {
  let table = [];
  for (let i = 0; i < 5; i++) {
    table.push({ id: i, items: getItemsinTable(data, i * 5, i * 5 + 5) });
  }
  return table;
};

export const getItemsinTable = (data, start, end) => {
  let items = [];
  for (let i = start; i < end; i++) {
    if (i === 12) {
      items.push({ name: "Bonus Card Bingo", id: i, status: true });
    } else {
      items.push({ name: data[i], id: i, status: false });
    }
  }
  return items;
};

export const getLucky = (tableData) => {

    let parent =  [0,1,2,3,4].sort(() => 0.5 - Math.random())[0]
    let child =  [0,1,3,4].sort(() => 0.5 - Math.random())[0]

    let getLucky =  tableData[parent].items
   let updateItem = { ...getLucky[child], status: !getLucky[child].status };
   let IndexupdateItem = getLucky.findIndex(el => {
     return el.id === updateItem.id;
   });

   let Newdata = tableData[parent].items.filter(el => {
     return el.id !== updateItem.id;
   });

   Newdata.splice(IndexupdateItem, 0, updateItem);

   let NewColone = { id: parent ,  items: Newdata };

   let IndexupdatemColon = tableData.findIndex(el => {
     return el.id === NewColone.id;
   });

   let finalData = tableData.filter(el => {
     return el.id !== parent;
   });

   finalData.splice(IndexupdatemColon, 0, NewColone);
   return [...finalData]
     
  };

  export const getHorizontal = data => {
    let final = [];
    for (let i = 0; i < data.length; i++) {
      final.push(
        data[i].items.filter(el => {
          return el.status === true;
        }).length
      );
    }
    return final.filter(el => {
      return el === 5;
    }).length;
  };

  export const getDiagonal = (final , keysofDiagonal ) => {
    let res = [];   
    for(let i = 0 ; i< keysofDiagonal.length ; i++){ 
      res.push(final[keysofDiagonal[i]])
    }
   return  res.filter(el => {
      return el.status === true;
    }).length === 5 ? 1 : 0  ;
  };

  export const getAllDataInArray = data => {
    let final = [];
    data.forEach(element => {
      final.push(...element.items);
    });
    return final;
  };

  export const VerticalResult = data => {
    let vertical = [];
  
    const getVertical = (data, i) => {
      return data
        .map(item => {
          return item.items[i];
        })
        .filter(el => {
          return el.status === true;
        }).length;
    };
  
    for (let i = 0; i < 5; i++) {
      vertical.push(getVertical(data, i));
    }
  
    return vertical.filter(el => {
      return el === 5;
    }).length;
  };

  export const checkResult = (data) => {
    let resVertical = VerticalResult(data)
    let resHorisontal = getHorizontal(data)
    let resFirstDigonal = getDiagonal (getAllDataInArray(data) , [0,6,12,18,24] )
    let resSecondDigonal = getDiagonal (getAllDataInArray(data) , [4,8,12,16,20] )
  let res =  resVertical + resHorisontal + resFirstDigonal + resSecondDigonal
  return res
   }

 
   export const clickTableCell = (item , data , fullData)=>{
    let updateItem = { ...item, status: true };

                let IndexupdateItem = data.items.findIndex(el => {
                  return el.id === updateItem.id;
                });

                let Newdata = data.items.filter(el => {
                  return el.id !== item.id;
                });

                Newdata.splice(IndexupdateItem, 0, updateItem);

                let NewColone = { id: data.id ,  items: Newdata };

                let IndexupdatemColon = fullData.findIndex(el => {
                  return el.id === NewColone.id;
                });

                let finalData = fullData.filter(el => {
                  return el.id !== data.id;
                });

                finalData.splice(IndexupdatemColon, 0, NewColone);
                return [...finalData]
   }