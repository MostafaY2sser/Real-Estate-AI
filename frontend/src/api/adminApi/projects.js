
import useDelete from "../../hooks/useDelete";
import useFetch from "../../hooks/useFetch";
import usePost from "../../hooks/usePost";
import useUpdate from "../../hooks/useUpdate";

export const useProjects = () => {
    
  const { getData, data: projects, loading, error } = useFetch();
  const { deleteData } = useDelete();
  const { postData } = usePost();
  const { updateData } = useUpdate();

  // fetch projects :- 
  const fetchProjects = () => getData("/projects");

  // delete project :-
  const deleteProjects = async (id) => {
    await deleteData(`/projects/${id}`);
    confirm("هل أنت متأكد من حذف هذا المشروع؟") &&
    fetchProjects();
  };

  
  //  add project :-
  const addProject = async (formData) => {
    try {
      await postData("/projects", formData, true);
      alert("تمت إضافة المشروع بنجاح ");
      return true;
    } catch (err) {
      alert("حدث خطأ أثناء الإضافة ، يرجى المحاولة مرة أخرى.");
      return false;
    }
  };


  // update project :-
  const updateProject = async (id, formData) => {
    try {
      await updateData(`/projects/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("تم تحديث المشروع بنجاح ✅");
      return true;
    } catch (err) {
      alert("حدث خطأ أثناء التحديث، يرجى المحاولة مرة أخرى");
      return false;
    }
  };


  return { projects, loading, error, fetchProjects, deleteProjects, addProject, updateProject };
};
