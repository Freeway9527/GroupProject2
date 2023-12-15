const homepage = async () => {
    try {
      const response = await fetch('/api/users/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.replace('/');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };
  
  document.getElementById('homepage').addEventListener('click', homepage);