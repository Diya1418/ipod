import React from "react";
import styles from "./wheel.module.css";

export default class Wheel extends React.Component{
     render(){
        return (
            <div className={styles.wheelbox}>
                <div className={styles.wheel}>
                    <div className={styles.menu}>
                    <img alt="Poster" src="https://cdn-icons-png.flaticon.com/128/9885/9885289.png" className={styles.menuimg}/>
                    </div>
                    <div className={styles.forward}>
                    <img alt="Poster" src="https://cdn-icons-png.flaticon.com/128/1/1824.png" className={styles.forwardimg}/>
                    </div>
                    <div className={styles.rewind}>
                    <img alt="Poster" src="https://cdn-icons-png.flaticon.com/128/3/3778.png" className={styles.rewindimg}/>
                    </div>
                    <div className={styles.playpause}>
                    <img alt="Poster" src="https://cdn-icons-png.flaticon.com/128/5725/5725942.png" className={styles.playpauseimg}/>
                    </div>
                </div>
            </div>
        )
     }

}