import React from 'react';
import { Youtubedata } from '../../data';
import Youtubeitem from './Youtubeitem';
import Toggle from './stage,props/Toggle';

const Youtubelist = (props) => {
 
    return (
        <div>
        <h2 className='Component-props' >Thực hành Component và props</h2>
            <div className="youtube-list">
            {/* {props.children} */}
            
                {Youtubedata.map((item, index) => (
                    <Youtubeitem
                        key={item.id}
                        image={item.image}
                        avatar={item.avatar}
                        title={item.title}
                        author={item.author}
                    ></Youtubeitem>
                ))}

                <Toggle></Toggle>


            </div>
        </div>
    );
};

export default Youtubelist;