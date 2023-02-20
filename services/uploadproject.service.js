import { fetchWrapper } from 'helpers';

export const orderService = {
   uploadProject,
};

function uploadProject(project_info) {
   return fetchWrapper.post(`/backend/upload_project`, project_info);
}