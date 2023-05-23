import { fetchWrapper } from 'helpers';

export const uploadProjectService = {
   uploadProject,
};

function uploadProject(project_info) {
   return fetchWrapper.post(`/backend/project/upload`, project_info);
}