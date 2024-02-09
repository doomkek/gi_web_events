const express = require('express');
const path = require('path');

const app = express();
const port = 30000;
const eventName = 'e20240208lantern';

app.use(express.static(path.join(__dirname, eventName, 'public')));

app.use('/images', express.static(path.join(__dirname, eventName, 'public', 'images')));
app.use('/medias', express.static(path.join(__dirname, eventName, 'public', 'medias')));
app.use('/hk4e_global/m20230804hy55w7u8sg', express.static(path.join(__dirname, eventName, 'public', 'hk4e_global', 'm20230804hy55w7u8sg')));
app.use('/bh3_global/20190812_5d51512fdef47', express.static(path.join(__dirname, eventName, 'public', 'bh3_global', '20190812_5d51512fdef47')));
app.use('/admin/mi18n/plat_oversea/m05302259261621', express.static(path.join(__dirname, eventName, 'public', 'bh3_global', '20190812_5d51512fdef47')));
app.use('/admin/mi18n/bh3_global', express.static(path.join(__dirname, eventName, 'public', 'bh3_global' )));
app.use('/admin/mi18n/plat_os', express.static(path.join(__dirname, eventName, 'public', 'bh3_global')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, eventName, 'index.html'));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, eventName, 'index.html'));
});

app.get('/device-fp/api/getExtList', (req, res) => res.send(JSON.stringify({"confirmBtn":"Confirm","exitBtn":"Quit","gpuAccDisable":"Please enable hardware acceleration in your browser to experience smoother animations.","ios17Err":"Failed to create WebGL. Close the process from the background or use another browser to take part in the event again. (webgl_err_toast)","loadErr":"Resource loading error. Please refresh and try again. (load_err_toast)","refreshBtn":"Refresh","webglErr":"Your current browser version is not the latest, we recommend using other browsers to participate in the event (webgl_err_toast)"})));
app.get('/common/badge/v1/login/info', (req, res) => res.send(JSON.stringify({"retcode":0,"message":"OK","data":{"game":"hk4e","region":"os_euro","game_uid":"700000000","game_biz":"","level":60,"nickname":"Username","region_name":"os_euro","type":0,"account_id":"6000000"}})));
app.get('/event/e20240208lantern/index', (req, res) => res.send(JSON.stringify({"retcode":0,"message":"OK","data":{"rd_task":true,"rd_barrier_reward":false,"current_coin":0,"guide":"init","rd_book_id":0,"rd_furniture":false,"rd_barrier_doing":true,"barrier_infos":[{"id":1,"barrier_status":"BarrierStatusUnLock","open_coin":0},{"id":2,"barrier_status":"BarrierStatusLock","open_coin":60},{"id":3,"barrier_status":"BarrierStatusLock","open_coin":60},{"id":4,"barrier_status":"BarrierStatusLock","open_coin":60},{"id":5,"barrier_status":"BarrierStatusUnset","open_coin":60}],"furniture_process":0,"gender":2,"share_status":"TS_DOING"}})));
app.post('/h5/upload', (req, res) => res.send('ok'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
