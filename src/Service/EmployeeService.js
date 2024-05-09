import axios from 'axios'

const EMPLOYEE_BASE_URL="http://localhost:8088/api/v1/employees";

class EmployeeService{

    getAllEmp(){
        return axios.get(EMPLOYEE_BASE_URL);
    }

    saveEmp(employee){
        return axios.post(EMPLOYEE_BASE_URL,employee);
    }
    getEmpById(employee_id){
        return axios.get(EMPLOYEE_BASE_URL+'/'+employee_id);
    }
    updateEmp(employee_id,employee){
        return axios.put(EMPLOYEE_BASE_URL+'/'+employee_id,employee);
    }
    deleteEmp(employee_id){
        return axios.delete(EMPLOYEE_BASE_URL+'/'+employee_id)
    }
}

export default new EmployeeService();