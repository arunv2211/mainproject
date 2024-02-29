import React from 'react'
import {Dialog, DialogContent, DialogTitle} from "@mui/material"

export default function AddPopup(props) {


    const {title, children, openPopup, setOpenPopup} = props;
    return (
        
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>title</div>
            </DialogTitle>
            <DialogContent>
                <div>contents...</div>

            </DialogContent>
        </Dialog>
      )
}
