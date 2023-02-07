import{u as p,C as d,_ as r,a as m,O as u,b as g,c as C,d as w,Q as f,h as v,G as A,f as W,i as T,J as y,R as b,U as E,j as R,k,P as S,B as o,t as h,l as N,A as U}from"./index.01b28359.js";class c extends p{constructor(t,e,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new d(t,e,s,n);super(l,a,i),r(this,"abi",void 0),r(this,"encoder",void 0),r(this,"estimator",void 0),r(this,"metadata",void 0),r(this,"sales",void 0),r(this,"platformFees",void 0),r(this,"events",void 0),r(this,"roles",void 0),r(this,"interceptor",void 0),r(this,"royalties",void 0),r(this,"claimConditions",void 0),r(this,"revealer",void 0),r(this,"checkout",void 0),r(this,"erc721",void 0),r(this,"owner",void 0),this.abi=s,this.metadata=new m(this.contractWrapper,u,this.storage),this.roles=new g(this.contractWrapper,c.contractRoles),this.royalties=new C(this.contractWrapper,this.metadata),this.sales=new w(this.contractWrapper),this.claimConditions=new f(this.contractWrapper,this.metadata,this.storage),this.encoder=new v(this.contractWrapper),this.estimator=new A(this.contractWrapper),this.events=new W(this.contractWrapper),this.platformFees=new T(this.contractWrapper),this.erc721=new y(this.contractWrapper,this.storage,i),this.revealer=new b(this.contractWrapper,this.storage,E.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new R(this.contractWrapper),this.owner=new k(this.contractWrapper),this.checkout=new S(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),e=await this.totalUnclaimedSupply();return t.add(e)}async getAllClaimed(t){const e=o.from((t==null?void 0:t.start)||0).toNumber(),a=o.from((t==null?void 0:t.count)||h).toNumber(),n=Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),e+a);return await Promise.all(Array.from(Array(n).keys()).map(s=>this.get(s.toString())))}async getAllUnclaimed(t){const e=o.from((t==null?void 0:t.start)||0).toNumber(),a=o.from((t==null?void 0:t.count)||h).toNumber(),n=o.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),e)),s=o.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),n.toNumber()+a));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(i=>this.erc721.getTokenMetadata(n.add(i).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(N("transfer"),U)}async createBatch(t,e){return this.erc721.lazyMint(t,e)}async getClaimTransaction(t,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,e,{checkERC20Allowance:a})}async claimTo(t,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.claimTo(t,e,{checkERC20Allowance:a})}async claim(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return this.claimTo(await this.contractWrapper.getSignerAddress(),t,e)}async burn(t){return this.erc721.burn(t)}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,e){return this.erc721.isApproved(t,e)}async transfer(t,e){return this.erc721.transfer(t,e)}async setApprovalForAll(t,e){return this.erc721.setApprovalForAll(t,e)}async setApprovalForToken(t,e){return{receipt:await this.contractWrapper.sendTransaction("approve",[t,e])}}async call(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return this.contractWrapper.call(t,...a)}}r(c,"contractRoles",["admin","minter","transfer"]);export{c as NFTDrop};
