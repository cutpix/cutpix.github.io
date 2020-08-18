public class ProcessorFactory
{
  public Func<ITextProcessor> CreateProcessor { get; set; }
  public Func<ILogger> CreateLogger { get; set; }

  public LambdaProcessorFactory()
  {
    this.CreateProcessor = () => new FileProcessor();
    this.CreateLogger = () => new FileLogger();
  }
}