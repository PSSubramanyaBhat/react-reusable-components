import logo from './logo.svg';
import React, { useState } from 'react';
import Button from './components/Button/Button';
import DialogBox from './components/DialogBox/DialogBox';
import './App.css';

function App() {
  const [showdialog, setShowDialog] = useState(false);

  const showDialogFunction = () => {
    setShowDialog(!showdialog);
  }

  return (
    <div className="App">
      {showdialog === false
        ? <Button
          name={'Dialog'}
          color1={'rgb(80, 80, 161)'}
          color2={'white'}
          // marginLeftValue={'160px'}
          marginLeftValue={'0px'}
          borderRadius={'25px'}
          onClick={showDialogFunction}
        >
        </Button>
        : ''

      }
      {/* <DialogBox
        DialogTitle={'Confirm Message'}
        DilogBodyContent={'Download the current .mp3 file?'}
        DisplayStatus={showdialog}
      ></DialogBox> */}


      {showdialog
        ? <DialogBox
          DialogTitle={'Confirm Message'}
          DilogBodyContent={'Download the current .mp3 file?'}
          textAlignment='center'
          Justify='center'
          Button1_Text={'Yes'}
          Button2_Text={'Cancel'}
          showDialogFunction={showDialogFunction}
        />
        : ''
      }
    </div>
  );
}

export default App;
