import React from 'react';
import ComponentItem from './ComponentItem';

const ComponentList = ({nameWrapper, elements, setElements}) => {
    return (
        <div className={`${nameWrapper}__elements-wrapper`}>
            {elements.map((elem, index) => 
                <ComponentItem 
                    elem={elem} 
                    key={elem.id} 
                    setElements={setElements} 
                    index={index}
                    elements={elements}
                    nameWrapper={nameWrapper}
                />
            )}
        </div>
    );
};

export default ComponentList;