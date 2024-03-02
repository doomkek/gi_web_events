const express = require('express');
const path = require('path');

const app = express();
const eventName = 'e20231028preview';
const eventPostMap = {
    e20240208lantern: 30000,
    e20231028preview: 30001,
    e20240126xianyun: 30002,
    e20230224dehya:   30003,
    e20240120preview: 30004,
    e20230302preview: 30005,
}

const port = eventPostMap[eventName];

app.use(express.static(path.join(__dirname, eventName, 'public')));

app.use('/images', express.static(path.join(__dirname, eventName, 'public', 'images')));
app.use('/medias', express.static(path.join(__dirname, eventName, 'public', 'media')));
app.use('/font_generate', express.static(path.join(__dirname, eventName, 'public', 'json')));
app.use('/hk4e_global/m20230804hy55w7u8sg', express.static(path.join(__dirname, eventName, 'public', 'hk4e_global', 'm20230804hy55w7u8sg')));
app.use('/bh3_global/20190812_5d51512fdef47', express.static(path.join(__dirname, eventName, 'public', 'bh3_global', '20190812_5d51512fdef47')));
app.use('/admin/mi18n/plat_oversea/m05302259261621', express.static(path.join(__dirname, eventName, 'public', 'bh3_global', '20190812_5d51512fdef47')));
app.use('/admin/mi18n/bh3_global', express.static(path.join(__dirname, eventName, 'public', 'bh3_global')));
app.use('/admin/mi18n/plat_os', express.static(path.join(__dirname, eventName, 'public', 'bh3_global')));
app.use('/mi18n/hk4e_global/m20240102hy37ffsnb4', express.static(path.join(__dirname, eventName, 'public', 'hk4e_global', 'm20240102hy37ffsnb4')));
app.use('/mi18n/hk4e_global/m20240102hy37ffsnb4/upload', express.static(path.join(__dirname, eventName, 'public', 'hk4e_global', 'm20240102hy37ffsnb4', 'upload')));
app.use('/admin/mi18n/hk4e_global/m202005181116501', express.static(path.join(__dirname, eventName, 'public', 'hk4e_global')));
app.use('/admin/mi18n/plat_cn/m10201340231541', express.static(path.join(__dirname, eventName, 'public', 'hk4e_global')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, eventName, 'index.html'));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, eventName, 'index.html'));
});

app.get('/device-fp/api/getExtList', (req, res) => res.send(JSON.stringify({ "confirmBtn": "Confirm", "exitBtn": "Quit", "gpuAccDisable": "Please enable hardware acceleration in your browser to experience smoother animations.", "ios17Err": "Failed to create WebGL. Close the process from the background or use another browser to take part in the event again. (webgl_err_toast)", "loadErr": "Resource loading error. Please refresh and try again. (load_err_toast)", "refreshBtn": "Refresh", "webglErr": "Your current browser version is not the latest, we recommend using other browsers to participate in the event (webgl_err_toast)" })));
app.get('/common/badge/v1/login/info', (req, res) => res.send(JSON.stringify({ "retcode": 0, "message": "OK", "data": { "game": "hk4e", "region": "os_euro", "game_uid": "700000000", "game_biz": "", "level": 60, "nickname": "Username", "region_name": "os_euro", "type": 0, "account_id": "6000000" } })));
app.post('/h5/upload', (req, res) => res.send('ok'));

if (eventName == "e20231028preview") {
    app.use('/admin/mi18n/hk4e_global/m20230605hy15aec7wg', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/plat_os/m20230926hy56fos3r4', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/hk4e_global/m20231020hy46oh2pkw', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.get('/event/e20240208lantern/index', (req, res) => res.send(JSON.stringify({ "retcode": 0, "message": "OK", "data": { "rd_task": true, "rd_barrier_reward": false, "current_coin": 0, "guide": "init", "rd_book_id": 0, "rd_furniture": false, "rd_barrier_doing": true, "barrier_infos": [{ "id": 1, "barrier_status": "BarrierStatusUnLock", "open_coin": 0 }, { "id": 2, "barrier_status": "BarrierStatusLock", "open_coin": 60 }, { "id": 3, "barrier_status": "BarrierStatusLock", "open_coin": 60 }, { "id": 4, "barrier_status": "BarrierStatusLock", "open_coin": 60 }, { "id": 5, "barrier_status": "BarrierStatusUnset", "open_coin": 60 }], "furniture_process": 0, "gender": 2, "share_status": "TS_DOING" } })));
}

if (eventName == "e20240126xianyun") {
    app.use('/admin/mi18n/plat_oversea/m05302259261621', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/plat_os/m20230926hy56fos3r4', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/bh3_global/20190812_5d51512fdef47', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/mi18n/hk4e_global/m20240108hy47hnbx8g', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/hk4e_global/m202005181116501/', express.static(path.join(__dirname, eventName, 'public', 'json')));

    var progress = {
        "retcode": 0,
        "message": "OK",
        "data": {
            "tasks": { "data": [
                {"task_id": 11, "status": "finish"},
                {"task_id": 12, "status": "finish"},
                {"task_id": 13, "status": "finish"},
                {"task_id": 15, "status": "finish"},
                {"task_id": 21, "status": "finish"},
            ] },                
        }
    };

    app.get('/event/merlin_v2/v3/flow/run/hk4e_global/e20240126rolewarm/1', (req, res) => res.send(JSON.stringify(progress)));

    app.post('/event/merlin_v2/v3/flow/run/hk4e_global/e20240126rolewarm/2', (req, res) => { 
        res.send(JSON.stringify(progress));
    });
}

if (eventName == "e20230224dehya") {
    app.use('/admin/mi18n/hk4e_global/m20230207hy1433e2gw', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/bh3_global/20190812_5d51512fdef47', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/hk4e_global/m20230419hy34t22mm8', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/hk4e_global/m202005181116501', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/plat_oversea/m05302259261621', express.static(path.join(__dirname, eventName, 'public', 'json')));

    var progress = {
        "retcode": 0,
        "message": "OK",
        "data": { is_reward: 1 }
    };

    app.get('/event/merlin_v2/v3/flow/run/hk4e_global/e20230224rolewarm/1', (req, res) => res.send(JSON.stringify(progress)));
    app.post('/event/merlin_v2/v3/flow/run/hk4e_global/e20230224rolewarm/7', (req, res) => { 
        res.send(JSON.stringify(progress));
    });
}

if (eventName == "e20240120preview") {
    app.use('/admin/mi18n/hk4e_global/m20230605hy15aec7wg', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/plat_os/m20230926hy56fos3r4', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/hk4e_global/m20240109hy87i2i1og', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/hk4e_global/m202005181116501', express.static(path.join(__dirname, eventName, 'public', 'json')));
    app.use('/admin/mi18n/hk4e_global/m202005181116501', express.static(path.join(__dirname, eventName, 'public', 'json')));
}

if (eventName == "e20230302preview") {
     app.use('/admin/i18n/hk4e_global/m20240223hy37yipam8', express.static(path.join(__dirname, eventName, 'public', 'json')));
     app.use('/admin/mi18n/plat_os/m20230926hy56fos3r4', express.static(path.join(__dirname, eventName, 'public', 'json')));
     app.use('/admin/mi18n/hk4e_global/m20240223hy37yipam8', express.static(path.join(__dirname, eventName, 'public', 'json')));
     app.use('/admin/mi18n/hk4e_global/m202005181116501', express.static(path.join(__dirname, eventName, 'public', 'json')));
     app.use('/admin/mi18n/plat_cn/m10201340231541', express.static(path.join(__dirname, eventName, 'public', 'json')));
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
