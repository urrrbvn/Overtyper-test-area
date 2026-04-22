import mount from './core/bootstrap'
const container = document.getElementById('app')

if (!container) {
  alert('no container')
} else {
  mount({ container })
}

