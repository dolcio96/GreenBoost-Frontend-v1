import { fetchWrapper } from 'helpers';

export const uploadProjectService = {
   uploadProject,
};

function uploadProject(project_info) {
   return fetchWrapper.post(`/backend/upload_project`, project_info);
}