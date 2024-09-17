import React, { useState } from 'react'

function OtherInputs() {
    const [textArea, setTextArea] = useState('');
    const [selectMenu, setSelectMenu] = useState('Dubai');
    // false se wo bydefault checked nhi hota 
    const [checkbox, setCheckBox] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Comments:' + e.target[0].value)
        console.log('Country :' + e.target[1].value)
        console.log('CheckBox' , e.target[2].checked)
        alert('Thanks for FeedBack!' + ' ' + e.target[0].value + ' ' + 'From' + ' ' + e.target[1].value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{ verticalAlign: 'top' }}>Comments : </label>
                <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} cols='30' rows='10' placeholder='Sent FeedBack'></textarea>
                <br /><br />


                <label>select Country:</label>
                <select value={selectMenu} onChange={(e) => setSelectMenu(e.target.value)}>
                    <option value='Canada'>Canada</option>
                    <option value='London'> London</option>
                    <option value='America'>America</option>
                    <option value='Dubai'>Dubai</option>
                </select>
                <br /><br />

                <label>Yes I Agree The Term: </label>
                {/* maine first time mai ise false kiya h or sec time mai ise true kiya h checked kr k */}
                <input type='checkbox' checked={checkbox} onChange={(e) => setCheckBox(e.target.checked)} />
                <br /><br />

                <input type='submit' value='Submit' />


            </form>
        </div>
    )
}

export default OtherInputs
