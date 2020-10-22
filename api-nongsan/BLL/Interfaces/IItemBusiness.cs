using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public partial interface IItemBusiness
    {
        bool Create(ProductModel model);
        ProductModel GetDatabyID(string id);
        List<ProductModel> GetDataAll();
        List<ProductModel> Search(int pageIndex, int pageSize, out long total, string item_group_id);
    }
}
