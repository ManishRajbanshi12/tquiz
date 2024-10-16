function loadContent(section) {
  const dynamicContent = document.getElementById('dynamic-content');

  // Clear the content
  dynamicContent.innerHTML = '';

  // Dynamically load content based on the section clicked
  if (section === 'home') {
    dynamicContent.innerHTML = '<h1>Home</h1><p>This is the home section content.</p>';
  } else if (section === 'dashboard') {
    dynamicContent.innerHTML = '<h1>Dashboard</h1><p>This is the dashboard section content.</p>';
  } else if (section === 'overview') {
    dynamicContent.innerHTML = '<h1>Overview</h1><p>This is the overview section content.</p>';
  } else if (section === 'notes') {
    dynamicContent.innerHTML = '<h1>Notes</h1><p>This is the notes section content.</p>';
  } else if (section === 'quiz') {
    dynamicContent.innerHTML = '<h1>Quiz</h1><a href="/quiz/index.html" target="_self"></a>';
  } else if (section === 'share') {
    dynamicContent.innerHTML = '<h1>Share</h1><p>This is the share section content.</p>';
  } else {
    dynamicContent.innerHTML = '<h1>Section Not Found</h1><p>Please select a valid section from the menu.</p>';
  }
}