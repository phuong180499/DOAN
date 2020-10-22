using DAL.Helper;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public partial class ProductGroupRepository : IProductGroupRepository
    {
        private IDatabaseHelper _dbHelper;
        public ProductGroupRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        
        public List<ProductGroupModel> GetData()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "sp_item_group_get_data");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<ProductGroupModel>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        } 
    }
}
