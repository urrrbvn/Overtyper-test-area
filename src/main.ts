import bootstrap from './core/bootstrap'
const container = document.getElementById('app')

if (!container) {
  alert('no container')
} else {
  bootstrap.mount({ container })
}

