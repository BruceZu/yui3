YUI.add("parallel",function(a){a.Parallel=function(b){this.config=b||{};this.results=[];this.context=this.config.context||a;this.total=0;this.finished=0;};a.Parallel.prototype={results:null,total:null,finished:null,add:function(c){var b=this;b.total+=1;return function(d){b.finished++;b.results.push((c&&c.apply(b.context,arguments))||(arguments.length===1?d:a.Array(arguments)));b.test();};},test:function(){var b=this;if(b.finished>=b.total&&b.callback){b.callback.call(b.context,b.results,b.data);}},done:function(c,b){this.callback=c;this.data=b;this.test();}};},"@VERSION@",{requires:["yui-base"]});