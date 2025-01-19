// Code Keypad Component Here

function Keypad (){
    const handleInputChange = (event) => {
        console.log('Entering password...');
      };


    return (
        <div>
            <input
                type="password"
                onChange={handleInputChange}
                placeholder="Enter your password"
            />
        </div>
    )
}

export default Keypad;