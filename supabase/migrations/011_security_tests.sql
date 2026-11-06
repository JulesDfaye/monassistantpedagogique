select tablename,rowsecurity from pg_tables where schemaname='public' and tablename in ('organizations','profiles','memberships','classes','curriculum_sources','curriculum_items','documents','document_versions','document_sources','exercises','assessments','student_sheets','progressions','conversations','conversation_messages','generation_jobs','exports','subscriptions','audit_events') order by tablename;
select id,title,organization_id from public.documents where organization_id <> '00000000-0000-0000-0000-000000000000';
select id,name,type from public.organizations where id <> '00000000-0000-0000-0000-000000000000';
select id,title,user_id from public.conversations where user_id <> auth.uid();
select id,document_id,format from public.exports where organization_id <> '00000000-0000-0000-0000-000000000000';
select id,title,status from public.curriculum_sources where status <> 'published';
select trigger_name,event_object_table from information_schema.triggers where trigger_schema='public' and trigger_name in ('audit_documents','audit_curriculum_sources');
