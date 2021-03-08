import React from 'react';

const Todo = () => {

    const itemsdata = [
        { index: 0, category: 'shokal', name: 'Porota', price: 100, extra: 20,  },
        { index: 1, category: 'shokal', name: 'Nan-Ruti', price: 140, extra: 40,  },
        { index: 2, category: 'shokal', name: 'Muglai', price: 120, extra: 27,  },
        { index: 3, category: 'shokal', name: 'Shahi kaba', price: 100, extra: 20,  },
        { index: 4, category: 'shokal', name: 'Alu-porota', price: 140, extra: 40,  },
        { index: 5, category: 'shokal', name: 'Niglai', price: 120, extra: 27,  },
        { index: 6, category: 'dupur', name: 'Asto khasi', price: 390, extra: 160,  },
        { index: 7, category: 'dupur', name: 'Kacchu', price: 250, extra: 54,  },
        { index: 8, category: 'dupur', name: 'Tehari', price: 90, extra: 35, },
        { index: 9, category: 'dupur', name: 'Asto Murgi', price: 390, extra: 160,  },
        { index: 10, category: 'dupur', name: 'Pulaw', price: 90, extra: 35,  },
        { index: 11, category: 'dupur', name: 'Sashmi kabab', price: 250, extra: 54,  },
        { index: 12, category: 'bikal', name: 'BBQ kuutta pura', price: 3800, extra: 805,  },
        { index: 13, category: 'bikal', name: 'BBQ chicken', price: 380, extra: 85,  },
        { index: 14, category: 'bikal', name: 'BBQ kuutta pura', price: 3800, extra: 805,  },
        { index: 15, category: 'bikal', name: 'BBQ chicken', price: 380, extra: 85,  },
    ]





    return (
        <div>
           <p>todo</p> 
           {
                itemsdata.map(item => <p>{item.name}</p> )
            //        <div>

            //         <p>{item.name}</p>
            //         <p>{item.index}</p>
            //         <p>{item.category}</p>
            //         <p>{item.price}</p>

            //        </div>
            //    })
           }
        </div>
    );
};

export default Todo;