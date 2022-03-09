import { NgModule } from "@angular/core";
import { SearchPipe } from "./search/search.pipe";

@NgModule({
  declarations: [SearchPipe],
  exports: [SearchPipe],
})
export class PipeModule {}
