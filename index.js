const routes = [
  { route: '/mastery', file: './static/loader.html' },
  { route: '/apps', file: './static/apps.html' },
  { route: '/gms', file: './static/gms.html' },
  { route: '/lessons', file: './static/agloader.html' },
  { route: '/', file: '.static/assets/rb/index.html' },
  { route: '/mycourses', file: './static/loading.html' }
];

index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/assets/rb/index.html'));
});

