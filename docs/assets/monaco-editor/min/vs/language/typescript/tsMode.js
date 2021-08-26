/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 4.4.0(e7d5b97033b3a498bd58612f957bc03ce06006cf)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};define("vs/language/typescript/workerManager",["require","exports","./fillers/monaco-editor-core"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerManager=void 0;var n=function(){function e(e,t){var r=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return r._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return r._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=r.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=r.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(r.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(r)})).then((function(t){return e}))},e}();t.WorkerManager=n})),define("vs/language/typescript/lib/lib.index",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.libFileSet=void 0,t.libFileSet={},t.libFileSet["lib.d.ts"]=!0,t.libFileSet["lib.dom.d.ts"]=!0,t.libFileSet["lib.dom.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.collection.d.ts"]=!0,t.libFileSet["lib.es2015.core.d.ts"]=!0,t.libFileSet["lib.es2015.d.ts"]=!0,t.libFileSet["lib.es2015.generator.d.ts"]=!0,t.libFileSet["lib.es2015.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.promise.d.ts"]=!0,t.libFileSet["lib.es2015.proxy.d.ts"]=!0,t.libFileSet["lib.es2015.reflect.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es2016.array.include.d.ts"]=!0,t.libFileSet["lib.es2016.d.ts"]=!0,t.libFileSet["lib.es2016.full.d.ts"]=!0,t.libFileSet["lib.es2017.d.ts"]=!0,t.libFileSet["lib.es2017.full.d.ts"]=!0,t.libFileSet["lib.es2017.intl.d.ts"]=!0,t.libFileSet["lib.es2017.object.d.ts"]=!0,t.libFileSet["lib.es2017.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2017.string.d.ts"]=!0,t.libFileSet["lib.es2017.typedarrays.d.ts"]=!0,t.libFileSet["lib.es2018.asyncgenerator.d.ts"]=!0,t.libFileSet["lib.es2018.asynciterable.d.ts"]=!0,t.libFileSet["lib.es2018.d.ts"]=!0,t.libFileSet["lib.es2018.full.d.ts"]=!0,t.libFileSet["lib.es2018.intl.d.ts"]=!0,t.libFileSet["lib.es2018.promise.d.ts"]=!0,t.libFileSet["lib.es2018.regexp.d.ts"]=!0,t.libFileSet["lib.es2019.array.d.ts"]=!0,t.libFileSet["lib.es2019.d.ts"]=!0,t.libFileSet["lib.es2019.full.d.ts"]=!0,t.libFileSet["lib.es2019.object.d.ts"]=!0,t.libFileSet["lib.es2019.string.d.ts"]=!0,t.libFileSet["lib.es2019.symbol.d.ts"]=!0,t.libFileSet["lib.es2020.bigint.d.ts"]=!0,t.libFileSet["lib.es2020.d.ts"]=!0,t.libFileSet["lib.es2020.full.d.ts"]=!0,t.libFileSet["lib.es2020.intl.d.ts"]=!0,t.libFileSet["lib.es2020.promise.d.ts"]=!0,t.libFileSet["lib.es2020.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2020.string.d.ts"]=!0,t.libFileSet["lib.es2020.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es5.d.ts"]=!0,t.libFileSet["lib.es6.d.ts"]=!0,t.libFileSet["lib.esnext.d.ts"]=!0,t.libFileSet["lib.esnext.full.d.ts"]=!0,t.libFileSet["lib.esnext.intl.d.ts"]=!0,t.libFileSet["lib.esnext.promise.d.ts"]=!0,t.libFileSet["lib.esnext.string.d.ts"]=!0,t.libFileSet["lib.esnext.weakref.d.ts"]=!0,t.libFileSet["lib.scripthost.d.ts"]=!0,t.libFileSet["lib.webworker.d.ts"]=!0,t.libFileSet["lib.webworker.importscripts.d.ts"]=!0,t.libFileSet["lib.webworker.iterable.d.ts"]=!0}));var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};define("vs/language/typescript/languageFeatures",["require","exports","./lib/lib.index","./fillers/monaco-editor-core"],(function(e,t,r,n){"use strict";var i;function s(e,t,r){if(void 0===r&&(r=0),"string"==typeof e)return e;if(void 0===e)return"";var n="";if(r){n+=t;for(var i=0;i<r;i++)n+="  "}if(n+=e.messageText,r++,e.next)for(var o=0,a=e.next;o<a.length;o++){n+=s(a[o],t,r)}return n}function o(e){return e?e.map((function(e){return e.text})).join(""):""}Object.defineProperty(t,"__esModule",{value:!0}),t.RenameAdapter=t.CodeActionAdaptor=t.FormatOnTypeAdapter=t.FormatAdapter=t.FormatHelper=t.Kind=t.OutlineAdapter=t.ReferenceAdapter=t.DefinitionAdapter=t.OccurrencesAdapter=t.QuickInfoAdapter=t.SignatureHelpAdapter=t.SuggestAdapter=t.DiagnosticsAdapter=t.LibFiles=t.Adapter=t.flattenDiagnosticMessageText=void 0,function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(i||(i={})),t.flattenDiagnosticMessageText=s;var a=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var r=e.getPositionAt(t.start),n=e.getPositionAt(t.start+t.length);return{startLineNumber:r.lineNumber,startColumn:r.column,endLineNumber:n.lineNumber,endColumn:n.column}},e}();t.Adapter=a;var l,u=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!r.libFileSet[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=n.editor.getModel(e);return t||(this.isLibFile(e)&&this._hasFetchedLibFiles?n.editor.createModel(this._libFiles[e.path.slice(1)],"typescript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(this.isLibFile(n))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();t.LibFiles=u,function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(l||(l={}));var c=function(e){function t(t,r,i,s){var o=e.call(this,s)||this;o._libFiles=t,o._defaults=r,o._selector=i,o._disposables=[],o._listener=Object.create(null);var a=function(e){if(e.getModeId()===i){var t,r=function(){o._defaults.getDiagnosticsOptions().onlyVisible?e.isAttachedToEditor()&&o._doValidate(e):o._doValidate(e)},s=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout(r,500)})),a=e.onDidChangeAttached((function(){o._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?r():n.editor.setModelMarkers(e,o._selector,[]))}));o._listener[e.uri.toString()]={dispose:function(){s.dispose(),a.dispose(),clearTimeout(t)}},r()}},l=function(e){n.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(n.editor.onDidCreateModel((function(e){return a(e)}))),o._disposables.push(n.editor.onWillDisposeModel(l)),o._disposables.push(n.editor.onDidChangeModelLanguage((function(e){l(e.model),a(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=n.editor.getModels();e<t.length;e++){var r=t[e];l(r)}}});var u=function(){for(var e=0,t=n.editor.getModels();e<t.length;e++){var r=t[e];l(r),a(r)}};return o._disposables.push(o._defaults.onDidChange(u)),o._disposables.push(o._defaults.onDidExtraLibsChange(u)),n.editor.getModels().forEach((function(e){return a(e)})),o}return __extends(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,i,s,o,a,l,u,c,d=this;return __generator(this,(function(p){switch(p.label){case 0:return[4,this._worker(e.uri)];case 1:return t=p.sent(),e.isDisposed()?[2]:(r=[],i=this._defaults.getDiagnosticsOptions(),s=i.noSyntaxValidation,o=i.noSemanticValidation,a=i.noSuggestionDiagnostics,s||r.push(t.getSyntacticDiagnostics(e.uri.toString())),o||r.push(t.getSemanticDiagnostics(e.uri.toString())),a||r.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(r)]);case 2:return!(l=p.sent())||e.isDisposed()?[2]:(u=l.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=u.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?n.Uri.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return p.sent(),e.isDisposed()?[2]:(n.editor.setModelMarkers(e,this._selector,u.map((function(t){return d._convertDiagnostics(e,t)}))),[2])}}))}))},t.prototype._convertDiagnostics=function(e,t){var r=t.start||0,i=t.length||1,o=e.getPositionAt(r),a=o.lineNumber,l=o.column,u=e.getPositionAt(r+i),c=u.lineNumber,d=u.column,p=[];return t.reportsUnnecessary&&p.push(n.MarkerTag.Unnecessary),t.reportsDeprecated&&p.push(n.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:l,endLineNumber:c,endColumn:d,message:s(t.messageText,"\n"),code:t.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var r=this;if(t){var i=[];return t.forEach((function(t){var o=e;if(t.file){var a=n.Uri.parse(t.file.fileName);o=r._libFiles.getOrCreateModel(a)}if(o){var l=t.start||0,u=t.length||1,c=o.getPositionAt(l),d=c.lineNumber,p=c.column,g=o.getPositionAt(l+u),f=g.lineNumber,b=g.column;i.push({resource:o.uri,startLineNumber:d,startColumn:p,endLineNumber:f,endColumn:b,message:s(t.messageText,"\n")})}})),i}},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case l.Error:return n.MarkerSeverity.Error;case l.Message:return n.MarkerSeverity.Info;case l.Warning:return n.MarkerSeverity.Warning;case l.Suggestion:return n.MarkerSeverity.Hint}return n.MarkerSeverity.Info},t}(a);t.DiagnosticsAdapter=c;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,r,i,s){return __awaiter(this,void 0,void 0,(function(){var i,s,o,a,l,u;return __generator(this,(function(c){switch(c.label){case 0:return i=e.getWordUntilPosition(r),s=new n.Range(r.lineNumber,i.startColumn,r.lineNumber,i.endColumn),o=e.uri,a=e.getOffsetAt(r),[4,this._worker(o)];case 1:return l=c.sent(),e.isDisposed()?[2]:[4,l.getCompletionsAtPosition(o.toString(),a)];case 2:return!(u=c.sent())||e.isDisposed()?[2]:[2,{suggestions:u.entries.map((function(i){var l,u=s;if(i.replacementSpan){var c=e.getPositionAt(i.replacementSpan.start),d=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);u=new n.Range(c.lineNumber,c.column,d.lineNumber,d.column)}var p=[];return-1!==(null===(l=i.kindModifiers)||void 0===l?void 0:l.indexOf("deprecated"))&&p.push(n.languages.CompletionItemTag.Deprecated),{uri:o,position:r,offset:a,range:u,label:i.name,insertText:i.name,sortText:i.sortText,kind:t.convertKind(i.kind),tags:p}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,r){return __awaiter(this,void 0,void 0,(function(){var r,n,i,s,a;return __generator(this,(function(l){switch(l.label){case 0:return n=(r=e).uri,i=r.position,s=r.offset,[4,this._worker(n)];case 1:return[4,l.sent().getCompletionEntryDetails(n.toString(),s,r.label)];case 2:return(a=l.sent())?[2,{uri:n,position:i,label:a.name,kind:t.convertKind(a.kind),detail:o(a.displayParts),documentation:{value:t.createDocumentationString(a)}}]:[2,r]}}))}))},t.convertKind=function(e){switch(e){case v.primitiveType:case v.keyword:return n.languages.CompletionItemKind.Keyword;case v.variable:case v.localVariable:return n.languages.CompletionItemKind.Variable;case v.memberVariable:case v.memberGetAccessor:case v.memberSetAccessor:return n.languages.CompletionItemKind.Field;case v.function:case v.memberFunction:case v.constructSignature:case v.callSignature:case v.indexSignature:return n.languages.CompletionItemKind.Function;case v.enum:return n.languages.CompletionItemKind.Enum;case v.module:return n.languages.CompletionItemKind.Module;case v.class:return n.languages.CompletionItemKind.Class;case v.interface:return n.languages.CompletionItemKind.Interface;case v.warning:return n.languages.CompletionItemKind.File}return n.languages.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=o(e.documentation);if(e.tags)for(var r=0,n=e.tags;r<n.length;r++){t+="\n\n"+p(n[r])}return t},t}(a);function p(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var r=e.text.split(" "),n=r[0],i=r.slice(1);t+="`"+n+"`",i.length>0&&(t+=" — "+i.join(" "))}else e.text&&(t+=" — "+e.text);return t}t.SuggestAdapter=d;var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return __extends(t,e),t._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case n.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case n.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case n.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},t.prototype.provideSignatureHelp=function(e,r,n,i){return __awaiter(this,void 0,void 0,(function(){var n,s,a,l,u;return __generator(this,(function(c){switch(c.label){case 0:return n=e.uri,s=e.getOffsetAt(r),[4,this._worker(n)];case 1:return a=c.sent(),e.isDisposed()?[2]:[4,a.getSignatureHelpItems(n.toString(),s,{triggerReason:t._toSignatureHelpTriggerReason(i)})];case 2:return!(l=c.sent())||e.isDisposed()?[2]:(u={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]},l.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:o(e.documentation)},t.label+=o(e.prefixDisplayParts),e.parameters.forEach((function(r,n,i){var s=o(r.displayParts),a={label:s,documentation:{value:o(r.documentation)}};t.label+=s,t.parameters.push(a),n<i.length-1&&(t.label+=o(e.separatorDisplayParts))})),t.label+=o(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))},t}(a);t.SignatureHelpAdapter=g;var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideHover=function(e,t,r){return __awaiter(this,void 0,void 0,(function(){var r,n,i,s,a,l,u;return __generator(this,(function(c){switch(c.label){case 0:return r=e.uri,n=e.getOffsetAt(t),[4,this._worker(r)];case 1:return i=c.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(r.toString(),n)];case 2:return!(s=c.sent())||e.isDisposed()?[2]:(a=o(s.documentation),l=s.tags?s.tags.map((function(e){return p(e)})).join("  \n\n"):"",u=o(s.displayParts),[2,{range:this._textSpanToRange(e,s.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:a+(l?"\n\n"+l:"")}]}])}}))}))},t}(a);t.QuickInfoAdapter=f;var b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentHighlights=function(e,t,r){return __awaiter(this,void 0,void 0,(function(){var r,i,s,o,a=this;return __generator(this,(function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt(t),[4,this._worker(r)];case 1:return s=l.sent(),e.isDisposed()?[2]:[4,s.getOccurrencesAtPosition(r.toString(),i)];case 2:return!(o=l.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?n.languages.DocumentHighlightKind.Write:n.languages.DocumentHighlightKind.Text}}))]}}))}))},t}(a);t.OccurrencesAdapter=b;var h=function(e){function t(t,r){var n=e.call(this,r)||this;return n._libFiles=t,n}return __extends(t,e),t.prototype.provideDefinition=function(e,t,r){return __awaiter(this,void 0,void 0,(function(){var r,i,s,o,a,l,u,c,d,p;return __generator(this,(function(g){switch(g.label){case 0:return r=e.uri,i=e.getOffsetAt(t),[4,this._worker(r)];case 1:return s=g.sent(),e.isDisposed()?[2]:[4,s.getDefinitionAtPosition(r.toString(),i)];case 2:return!(o=g.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return n.Uri.parse(e.fileName)})))];case 3:if(g.sent(),e.isDisposed())return[2];for(a=[],l=0,u=o;l<u.length;l++)c=u[l],d=n.Uri.parse(c.fileName),(p=this._libFiles.getOrCreateModel(d))&&a.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))},t}(a);t.DefinitionAdapter=h;var m=function(e){function t(t,r){var n=e.call(this,r)||this;return n._libFiles=t,n}return __extends(t,e),t.prototype.provideReferences=function(e,t,r,i){return __awaiter(this,void 0,void 0,(function(){var r,i,s,o,a,l,u,c,d,p;return __generator(this,(function(g){switch(g.label){case 0:return r=e.uri,i=e.getOffsetAt(t),[4,this._worker(r)];case 1:return s=g.sent(),e.isDisposed()?[2]:[4,s.getReferencesAtPosition(r.toString(),i)];case 2:return!(o=g.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return n.Uri.parse(e.fileName)})))];case 3:if(g.sent(),e.isDisposed())return[2];for(a=[],l=0,u=o;l<u.length;l++)c=u[l],d=n.Uri.parse(c.fileName),(p=this._libFiles.getOrCreateModel(d))&&a.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))},t}(a);t.ReferenceAdapter=m;var _=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentSymbols=function(e,t){return __awaiter(this,void 0,void 0,(function(){var t,r,i,s,o,a=this;return __generator(this,(function(l){switch(l.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return r=l.sent(),e.isDisposed()?[2]:[4,r.getNavigationBarItems(t.toString())];case 2:return!(i=l.sent())||e.isDisposed()?[2]:(s=function(t,r,i){var o={name:r.text,detail:"",kind:S[r.kind]||n.languages.SymbolKind.Variable,range:a._textSpanToRange(e,r.spans[0]),selectionRange:a._textSpanToRange(e,r.spans[0]),tags:[],containerName:i};if(r.childItems&&r.childItems.length>0)for(var l=0,u=r.childItems;l<u.length;l++){var c=u[l];s(t,c,o.name)}t.push(o)},o=[],i.forEach((function(e){return s(o,e)})),[2,o])}}))}))},t}(a);t.OutlineAdapter=_;var v=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}();t.Kind=v;var S=Object.create(null);S[v.module]=n.languages.SymbolKind.Module,S[v.class]=n.languages.SymbolKind.Class,S[v.enum]=n.languages.SymbolKind.Enum,S[v.interface]=n.languages.SymbolKind.Interface,S[v.memberFunction]=n.languages.SymbolKind.Method,S[v.memberVariable]=n.languages.SymbolKind.Property,S[v.memberGetAccessor]=n.languages.SymbolKind.Property,S[v.memberSetAccessor]=n.languages.SymbolKind.Property,S[v.variable]=n.languages.SymbolKind.Variable,S[v.const]=n.languages.SymbolKind.Variable,S[v.localVariable]=n.languages.SymbolKind.Variable,S[v.variable]=n.languages.SymbolKind.Variable,S[v.function]=n.languages.SymbolKind.Function,S[v.localFunction]=n.languages.SymbolKind.Function;var y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:i.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(a);t.FormatHelper=y;var w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,r,n){return __awaiter(this,void 0,void 0,(function(){var n,i,s,o,a,l=this;return __generator(this,(function(u){switch(u.label){case 0:return n=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(n)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsForRange(n.toString(),i,s,y._convertOptions(r))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return l._convertTextChanges(e,t)}))]}}))}))},t}(y);t.FormatAdapter=w;var F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,r,n,i){return __awaiter(this,void 0,void 0,(function(){var i,s,o,a,l=this;return __generator(this,(function(u){switch(u.label){case 0:return i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsAfterKeystroke(i.toString(),s,r,y._convertOptions(n))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return l._convertTextChanges(e,t)}))]}}))}))},t}(y);t.FormatOnTypeAdapter=F;var k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideCodeActions=function(e,t,r,n){return __awaiter(this,void 0,void 0,(function(){var n,i,s,o,a,l,u,c=this;return __generator(this,(function(d){switch(d.label){case 0:return n=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=y._convertOptions(e.getOptions()),a=r.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(n)];case 1:return l=d.sent(),e.isDisposed()?[2]:[4,l.getCodeFixesAtPosition(n.toString(),i,s,a,o)];case 2:return!(u=d.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:u.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return c._tsCodeFixActionToMonacoCodeAction(e,r,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,r){for(var n=[],i=0,s=r.changes;i<s.length;i++)for(var o=0,a=s[i].textChanges;o<a.length;o++){var l=a[o];n.push({resource:e.uri,edit:{range:this._textSpanToRange(e,l.span),text:l.newText}})}return{title:r.description,edit:{edits:n},diagnostics:t.markers,kind:"quickfix"}},t}(y);t.CodeActionAdaptor=k;var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideRenameEdits=function(e,t,r,i){return __awaiter(this,void 0,void 0,(function(){var i,s,o,a,l,u,c,d,p,g,f,b;return __generator(this,(function(h){switch(h.label){case 0:return i=e.uri,s=i.toString(),o=e.getOffsetAt(t),[4,this._worker(i)];case 1:return a=h.sent(),e.isDisposed()?[2]:[4,a.getRenameInfo(s,o,{allowRenameOfImportPath:!1})];case 2:if(!1===(l=h.sent()).canRename)return[2,{edits:[],rejectReason:l.localizedErrorMessage}];if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(s,o,!1,!1,!1)];case 3:if(!(u=h.sent())||e.isDisposed())return[2];for(c=[],d=0,p=u;d<p.length;d++){if(g=p[d],f=n.Uri.parse(g.fileName),!(b=n.editor.getModel(f)))throw new Error("Unknown URI "+f+".");c.push({resource:f,edit:{range:this._textSpanToRange(b,g.textSpan),text:r}})}return[2,{edits:c}]}}))}))},t}(a);t.RenameAdapter=x})),define("vs/language/typescript/tsMode",["require","exports","./workerManager","./languageFeatures","./fillers/monaco-editor-core"],(function(e,t,r,n,i){"use strict";var s,o;function a(e,t){var s=new r.WorkerManager(t,e),o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.getLanguageServiceWorker.apply(s,e)},a=new n.LibFiles(o);return i.languages.registerCompletionItemProvider(t,new n.SuggestAdapter(o)),i.languages.registerSignatureHelpProvider(t,new n.SignatureHelpAdapter(o)),i.languages.registerHoverProvider(t,new n.QuickInfoAdapter(o)),i.languages.registerDocumentHighlightProvider(t,new n.OccurrencesAdapter(o)),i.languages.registerDefinitionProvider(t,new n.DefinitionAdapter(a,o)),i.languages.registerReferenceProvider(t,new n.ReferenceAdapter(a,o)),i.languages.registerDocumentSymbolProvider(t,new n.OutlineAdapter(o)),i.languages.registerDocumentRangeFormattingEditProvider(t,new n.FormatAdapter(o)),i.languages.registerOnTypeFormattingEditProvider(t,new n.FormatOnTypeAdapter(o)),i.languages.registerCodeActionProvider(t,new n.CodeActionAdaptor(o)),i.languages.registerRenameProvider(t,new n.RenameAdapter(o)),new n.DiagnosticsAdapter(a,e,t,o),o}Object.defineProperty(t,"__esModule",{value:!0}),t.getTypeScriptWorker=t.getJavaScriptWorker=t.setupJavaScript=t.setupTypeScript=void 0,t.setupTypeScript=function(e){o=a(e,"typescript")},t.setupJavaScript=function(e){s=a(e,"javascript")},t.getJavaScriptWorker=function(){return new Promise((function(e,t){if(!s)return t("JavaScript not registered!");e(s)}))},t.getTypeScriptWorker=function(){return new Promise((function(e,t){if(!o)return t("TypeScript not registered!");e(o)}))}}));