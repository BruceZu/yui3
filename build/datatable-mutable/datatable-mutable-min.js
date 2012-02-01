YUI.add("datatable-mutable",function(a){var c=a.Array,f=a.Lang,b=f.isString,d=f.isArray,i=f.isObject,h=f.isNumber,g=a.Array.indexOf,e;a.namespace("DataTable").Mutable=e=function(){};e.ATTRS={autoSync:{}};a.mix(e.prototype,{addColumn:function(k,j){if(b(k)){k={key:k};}if(k){if(arguments.length<2||(!h(j)&&!d(j))){j=this.get("columns").length;}this.fire("addColumn",{column:k,index:j});}return this;},modifyColumn:function(k,j){if(b(j)){j={key:j};}if(i(j)){this.fire("modifyColumn",{column:k,newColumnDef:j});}return this;},moveColumn:function(k,j){if(k&&(h(j)||d(j))){this.fire("moveColumn",{column:k,index:j});}return this;},removeColumn:function(j){if(j){this.fire("removeColumn",{column:j});}return this;},addRow:function(o,l){var n=(l&&("sync" in l))?l.sync:this.get("autoSync"),p,m,j,k;if(this.data){p=this.data.add.apply(this.data,arguments);if(n){p=c(p);k=c(arguments,1,true);for(m=0,j=p.length;m<j;++m){p[m].save.apply(p[m],k);}}}return this;},removeRow:function(k,m){var l=this.data,r=(m&&("sync" in m))?m.sync:this.get("autoSync"),j,o,n,p,q;if(i(k)&&k instanceof this.get("recordType")){o=k;}else{if(l&&k!==undefined){o=l.getById(k)||l.getByClientId(k)||l.item(k);}}if(o){q=c(arguments,1,true);j=l.remove.apply(l,[o].concat(q));if(r){if(!i(q[0])){q.unshift({});}q[0]["delete"]=true;j=c(j);for(n=0,p=j.length;n<p;++n){o=j[n];o.destroy.apply(o,q);}}}return this;},modifyRow:function(p,o,l){var m=this.data,n=(l&&("sync" in l))?l.sync:this.get("autoSync"),k,j;if(i(p)&&p instanceof this.get("recordType")){k=p;}else{if(m&&p!==undefined){k=m.getById(p)||m.getByClientId(p)||m.item(p);}}if(k&&i(o)){j=c(arguments,1,true);k.setAttrs.apply(k,j);if(n){k.save.apply(k,j);}}return this;},_defAddColumnFn:function(o){var k=c(o.index),m=this.get("columns"),n=m,l,j;for(l=0,j=k.length-1;n&&l<j;++l){n=n[k[l]]&&n[k[l]].children;}if(n){n.splice(k[l],0,o.column);this.set("columns",m,{originEvent:o});}},_defModifyColumnFn:function(l){var j=this.get("columns"),k=this.getColumn(l.column);if(k){a.mix(k,l.newColumnDef,true);this.set("columns",j,{originEvent:l});}},_defMoveColumnFn:function(p){var l=this.get("columns"),k=this.getColumn(p.column),m=c(p.index),j,q,r,n,o;if(k){j=k.parent?k.parent.children:l;q=g(j,k);if(q>-1){r=l;for(n=0,o=m.length-1;r&&n<o;++n){r=r[n]&&r[n].children;}if(r){j.splice(q,1);r.splice(m[n],1,k);this.set("columns",l,{originEvent:p});}}}},_defRemoveColumnFn:function(n){var k=this.get("columns"),l=this.getColumn(n.column),m,j;if(l){m=l.parent?l.parent.children:k;j=a.Array.indexOf(m,l);if(j>-1){m.splice(j,1);this.set("columns",k,{originEvent:n});}}},initializer:function(){this.publish({addColumn:{defaultFn:a.bind("_defAddColumnFn",this)},removeColumn:{defaultFn:a.bind("_defRemoveColumnFn",this)},moveColumn:{defaultFn:a.bind("_defMoveColumnFn",this)},modifyColumn:{defaultFn:a.bind("_defModifyColumnFn",this)}});}});e.prototype.addRows=e.prototype.addRow;if(f.isFunction(a.DataTable)){a.Base.mix(a.DataTable,[e]);}},"@VERSION@",{requires:["datatable-base"]});