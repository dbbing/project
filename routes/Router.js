var express = require("express");
var route = express.Router();
var db = require("../db/DB");

route.get("/department",(req,resp)=>{
    db.department().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
route.get("/topic",(req,resp)=>{
    db.topic().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.get("/type",(req,resp)=>{
    db.type().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
route.get("/level",(req,resp)=>{
   db.level().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
route.post('/subject',(req,resp)=>{
    var ids=Arr(req.body['ids[]']);
    console.log("req.body:",req.body['ids[]']);
    // console.log(ids);
    db.subject(ids).then((data)=>{
        console.log("data:",data);
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.post('/update',(req,resp)=>{
    var id=req.body['id'];
    var state=req.body['state'];
    console.log(id,state);
    db.update(state,id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.post('/delete',(req,resp)=>{
    var id=req.body['id'];
     db.delete(id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.post('/answer',(req,resp)=>{
    db.answer().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
route.get('/analysis',(req,resp)=>{
    db.analysis().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
route.post('/saveSubject',(req,resp)=>{
    // console.log(111);
    var type_id=req.body['type_id'];
    var department_id=req.body['department_id'];
    var topic_id=req.body['topic_id'];
    var level_id=req.body['level_id'];
    var stem=req.body['stem'];
    var answer = req.body['answer[]'];
    var correct = req.body['correct'];
    var checkState = req.body['checkState'];
    var analysis = req.body['analysis'];
    console.log(answer);
    db.saveSubject(type_id,department_id,topic_id,level_id,stem,answer,checkState,analysis).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
function Arr(a){
    var arr=[];
    return arr.concat(a);
}
module.exports = route;
