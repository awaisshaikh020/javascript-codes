function getAlphabetInfo() {
    const letterInput = document.getElementById('letterInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');


    const alphabetInfo = {
      'a': {
        pronunciation: 'ay',
        words: ['ALi', 'ant', 'among']
      },
      'b': {
        pronunciation: 'bee',
        words: ['ballon', 'bear', 'baber']
      },
      'c': {
        pronunciation: 'cee',
        words: ['chocolate', 'cream', 'ceema']
      },
      'd': {
        pronunciation: 'dee',
        words: ['dilawar', 'dream', 'done']
      }
      ,
      'e': {
        pronunciation: 'eee',
        words: ['elephrant', 'enemy', 'emran']
      }
      ,
      'f': {
        pronunciation: 'aff',
        words: ['farhan', 'fan', 'fellow']
      }
      ,
      'g': {
        pronunciation: 'gee',
        words: ['gamming', 'girl', 'gyle']
      }
      ,
      'h': {
        pronunciation: 'aich',
        words: ['hero', 'horse', 'hamid']
      }
      ,
      'i': {
        pronunciation: 'aiiee',
        words: ['ignore', 'inner', 'income']
      }
      ,
      'j': {
        pronunciation: 'jea',
        words: ['javeriya', 'jhon', 'jameel']
      }
      ,
      'k': {
        pronunciation: 'kea',
        words: ['kamran', 'kill', 'kaif']
      }
      ,
      'l': {
        pronunciation: 'al',
        words: ['love', 'lame', 'lose']
      }
      ,
      'm': {
        pronunciation: 'am',
        words: ['mangoes', 'money', 'monkey']
      }
      ,
      'n': {
        pronunciation: 'an',
        words: ['none', 'no', 'nun']
      }
      ,
      'o': {
        pronunciation: 'ow',
        words: ['orange', 'on', 'ohm,s']
      }
      ,
      'p': {
        pronunciation: 'pee',
        words: ['piano', 'pen', 'pencil']
      }
      ,
      'q': {
        pronunciation: 'qu',
        words: ['queen', 'qoo', 'qimtom']
      }
      ,
      'r': {
        pronunciation: 'arr',
        words: ['row', 'red', 'rental']
      }
      ,
      's': {
        pronunciation: 'ass',
        words: ['saw', 'same', 'slow']
      }
      ,
      't': {
        pronunciation: 'tee',
        words: ['tomm', 'tear', 'tall']
      }
      ,
      'u': {
        pronunciation: 'uo',
        words: ['umberalla', 'union', 'un-nessary']
      }
      ,
      'v': {
        pronunciation: 'vee',
        words: ['veer', 'view', 'vom']
      }
      ,
      'w': {
        pronunciation: 'dabliu',
        words: ['won', 'wear', 'wound']
      } ,
      'x': {
        pronunciation: 'ax',
        words: ['x-ray', 'x-wife', 'xendtitical']
      } ,
      'y': {
        pronunciation: 'yaii',
        words: ['year', 'yumna', 'yellow']
      }
      ,
      'z': {
        pronunciation: 'zee',
        words: ['zara', 'zafar', 'zebra']
      }
    
    };

    if (alphabetInfo.hasOwnProperty(letterInput)) {
      const info = alphabetInfo[letterInput];
      resultDiv.innerHTML = `<p>Pronunciation: ${info.pronunciation}</p>`;
      resultDiv.innerHTML += `<p>Words that start with ${letterInput.toUpperCase()}: ${info.words.join(', ')}</p>`;
    } else {
      resultDiv.innerHTML = '<p>Please enter a valid letter.</p>';
    }
  }