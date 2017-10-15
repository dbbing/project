var pool = require("./pool");

module.exports={
    department(){
        var sql = "select * from tbl_exam_department";
        return pool.execute(sql);
    },
    topic(){
        var sql="select * from tbl_exam_topic";
        return pool.execute(sql);
    },
    level(){
        var sql="select * from tbl_exam_subjectlevel";
        return pool.execute(sql);
    },
    type(){
        var sql = "select * from tbl_exam_subjecttype";
        return pool.execute(sql);
    },
    subject(id){
        console.log("id:",id);
        var sql = "select * from tbl_exam_subject where department_id='"+id[1]+"' and subjectLevel_id='"+id[2]+"' and subjecttype_id='"+id[0]+"' and topic_id='"+id[3]+"'";
        console.log("sql:",sql);
        return pool.execute(sql);
    },
    update(state,id){
        var sql = "update tbl_exam_subject set checkState='"+state+"' where id="+id;
        return pool.execute(sql);
    },
    delete(id){
        var sql = "delete from tbl_exam_subject where id="+id;
        return pool.execute(sql);
    },
    answer(){
        var sql = "select * from tbl_exam_choice";
        return pool.execute(sql);
    },
    analysis(){
        var sql = "select * from tbl_exam_subject";
        return pool.execute(sql);
    },
   saveSubject(type_id,department_id,topic_id,level_id,stem,answer,checkState,analysis){
       var sql = "insert into tbl_exam_subject(id,analysis,answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id) values(null,'"+analysis+"','"+answer+"','"+checkState+"','"+stem+"','"+department_id+"','"+level_id+"','"+type_id+"','"+topic_id+"')";
        // var sql = "insert into tbl_exam_choice(correct) values('"+correct+"')";
        return pool.execute(sql);
   }
}