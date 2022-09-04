function openIndex(id) {
    document.querySelectorAll('.key').forEach(elt => elt.classList.remove('active'));
    document.querySelector('#'+id).classList.add('active');
  }