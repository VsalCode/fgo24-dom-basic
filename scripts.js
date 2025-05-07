const input = document.querySelector('h4 > span').textContent
    const c = parseInt(input)
     
    function calculateFahrenheit(x) {
      return (9/5 * x) + 32
    }
    
    function calculateKelvin(x) {
      return x + 273
    }
    
    function calculateReamur(x) {
      return (4/5) * x
    }
    
    const f = calculateFahrenheit(c) 
    const k = calculateKelvin(c)
    const r = calculateReamur(c)
    
    const fahrenheit = document.querySelector('p:nth-child(3) > span')
    const kelvin = document.querySelector('p:nth-child(4) > span')
    const reamur = document.querySelector('p:nth-child(5) > span')

    fahrenheit.textContent = f
    kelvin.textContent = k
    reamur.textContent = r
