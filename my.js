 var Main= {
    data() {
        return {
	 					form:[],
	 					formM:[],
	          dialogVisible: false,
	          dialogMVisible: false,
            tableData5: [{
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333',
							  childData:[{cid:0},{cid:1}],
							  IsEdit:false
            }, {
                id: '12987123',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333',
							 childData:[{cid:10},{cid:11}],
							 IsEdit:false
            }, {
                id: '12987125',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333',
							 childData:[{cid:110},{cid:111}],
							 IsEdit:false
            }, {
                id: '12987126',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333',
							  childData:[{cid:1110},{cid:1111}],
							  IsEdit:false
            }],
            // 获取row的key值
            getRowKeys(row) {
	           
                return row.id;
            },
            // 要展开的行，数值的元素是row的key值
            expands: []
        }
    },
    mounted() {
        // 在这里你想初始化的时候展开哪一行都可以了
        this.expands.push(this.tableData5[0].id);
    },
		methods: {
			alertRow(row){
				console.log(row);
				if(row.IsEdit)
				{
					row.IsEdit=false;
				}
				else
				{
					row.IsEdit=true;
				}
				 //this.expands[row.id]
			  //alert(row.id);
					  this.expands = [];
            this.expands.push(row.id);
			},
			handleClick(row,index){
					this.dialogVisible =true;
					//this.form=this.tableData5[index];
				 this.form=row
				  console.log(row)
			},
			handleDelete(index,row){
				 	   console.log(index);
						 console.log(row)
			},
			handleEdit(index,row){
						  console.log(index);
						  console.log(row);
							this.dialogMVisible=true;
							this.formM=row;
			},
			toggleRowExpansion(obj){
							    console.log(obj);
			},		 
		   onSubmit() {
            console.log('submit!');
            },
						handleClose(done) {
             this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
				
			
			}
}

var Ctor=Vue.extend(Main);

new Ctor().$mount('#app');


/*
<el-form label-position="left" 
						v-show="props.row.IsEdit"    class="demo-table-expand" >

                    <el-form-item label="商品名称">
                        {{ props.row.name }}
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                        <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                        <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                        <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <span>{{ props.row.desc }}</span>
                    </el-form-item>
                </el-form>
			

*/


/**
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
 
  <el-form-item label="描述">
    <el-input v-model="form.category"></el-input>
  </el-form-item>
 
  <el-form-item label="地址">
    <el-input type="textarea" v-model="form.address"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
 

**/
			