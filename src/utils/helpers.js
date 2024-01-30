export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (error) => {
          showError(error)
          reject(error)
        },
      )
    } else {
      const error = "La géolocalisation n'est pas supportée par ce navigateur."
      alert(error)
      reject(error)
    }
  })
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("L'utilisateur a refusé la demande de géolocalisation.")
      break
    case error.POSITION_UNAVAILABLE:
      alert('Les informations de localisation ne sont pas disponibles.')
      break
    case error.TIMEOUT:
      alert(
        "La demande d'obtention de la localisation de l'utilisateur a expiré.",
      )
      break
    default:
      alert(
        "Une erreur s'est produite lors de la tentative de récupération de votre position.",
      )
      break
  }
}

// Cette fonction calcule la distance entre deux points de coordonnées
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Rayon de la Terre en kilomètres
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c // Distance en kilomètres
  return distance
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}