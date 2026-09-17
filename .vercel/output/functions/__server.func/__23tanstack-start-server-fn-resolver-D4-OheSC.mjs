//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D4-OheSC.js
var manifest = { "52a5396c5d2944e5c1fe128fd1674a451fc86a9329305a259a54a82f8004b8d9": {
	functionName: "submitAudit_createServerFn_handler",
	importer: () => import("./_ssr/audit.functions-DzJUUfr2.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
