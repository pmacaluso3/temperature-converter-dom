function convertFtoC(temp) {
  const rawTemp = (temp - 32) / 1.8
  return rawTemp.toFixed(2)
}

function convertCtoF(temp) {
  const rawTemp = (temp * 1.8) + 32
  return rawTemp.toFixed(2)
}

function colorChangeCtoF(temp) {
  const display = document.querySelector('.display')
  
  if(parseFloat(temp) > 212) {
    display.classList.add('hot')
    display.classList.remove('cold')
  } else if (parseFloat(temp) < 32) {
    display.classList.add('cold')
    display.classList.remove('hot')
  } else {
    display.classList.remove('hot')
    display.classList.remove('cold')
  }
}


function colorChangeFtoC(temp) {
  const display = document.querySelector('.display')
  
  if(parseFloat(temp) > 100) {
    display.classList.add('hot')
    display.classList.remove('cold')
  } else if (parseFloat(temp) < 0) {
    display.classList.add('cold')
    display.classList.remove('hot')
  } else {
    display.classList.remove('hot')
    display.classList.remove('cold')
  }
}

function handleColorChange(temp, units) {
  if(units === 'C-to-F') {
    colorChangeCtoF(temp)
  } else if('F-to-C') {
    colorChangeFtoC(temp)
  }
}


document.querySelector('form').addEventListener('submit', function(evt) {
  evt.preventDefault()
  
  const inputTemp = document.querySelector('input').value
  const units = document.querySelector('input[type=radio]:checked').value

  let outputTemp = null
  if (units === 'C-to-F') {
    outputTemp = convertCtoF(inputTemp)
  } else if (units === 'F-to-C') {
    outputTemp = convertFtoC(inputTemp)
  }

  handleColorChange(outputTemp, units)

  document.querySelector('.display').innerText = outputTemp
})

document.querySelector('#clear').addEventListener('click', function() {
  document.querySelector('input').value = ''
  document.querySelector('.display').innerText = 'Result goes here'
})
