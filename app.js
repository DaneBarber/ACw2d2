const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
  { heavy: true, priority: true, fragile: true, to: 'Brittany' },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz' },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367' }]

let currentPackages = packages
let missingPackage = null

function startGame() {
  let index = Math.floor(Math.random() * currentPackages.length)
  console.log(index);
  currentPackages[index].lost = true
  console.log('Package is lost', currentPackages[index]);
  missingPackage = currentPackages[index]
}

function drawPackages() {
  let template = ''

  currentPackages.forEach(package => {
    template += `<div class="col-md-3 bg-light rounded d-flex m-2"><img class=" col-5 image-fluid" src="/packageBCW.png" alt="">
        <div class="col-7"> To: ${package.to}<br>TN: ${package.trackingNumber}</div>
      </div>`
  })
  document.getElementById('backlog').innerHTML = template
}













drawPackages()
// startGame()